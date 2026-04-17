/*jshint esversion: 8 */
const express = require('express');
// import the natural library
const natural = require('natural');
const logger = require('../logger');
const router = express.Router();
const connectToDatabase = require('../models/db');

router.get('/', async (req, res) => {
    try {
        // Task 1: Connect to MongoDB and store connection to db constant
        const db = await connectToDatabase();

        // Task 2: use the collection() method to retrieve the gift collection
        const collection = db.collection("gifts");

        // Task 3: Fetch all gifts using the collection.find method. Chain with toArray method to convert to JSON array
        const gifts = await collection.find({}).toArray();

        // Task 4: return the gifts using the res.json method
        res.json(gifts);
    } catch (e) {
        console.error('Error fetching gifts:', e);
        res.status(500).send('Error fetching gifts');
    }
});

router.get('/:id', async (req, res) => {
    try {
        // Task 1: Connect to MongoDB and store connection to db constant
        const db = await connectToDatabase();

        // Task 2: use the collection() method to retrieve the gift collection
        const collection = db.collection("gifts");

        const id = req.params.id;

        // Task 3: Find a specific gift by ID using the collection.fineOne method and store in constant called gift
        const gift = await collection.findOne({ id: id });

        if (!gift) {
            return res.status(404).send('Gift not found');
        }
        
        const sentiment = getSentiment(gift.comments);

        res.json({gift, sentiment});
    } catch (e) {
        console.error('Error fetching gift:', e);
        res.status(500).send('Error fetching gift');
    }
});

const getSentiment = function(comments) {
    // extract the sentence parameter
    let sentence = comments[0].comment;
    let commentsLength = comments.length;
    for (let i = 1 ; i < commentsLength ; i++) {
        sentence += ' ' + comments[i].comment;
    }

    // Initialize the sentiment analyzer with the Natural's PorterStemmer and "English" language
    const Analyzer = natural.SentimentAnalyzer;
    const stemmer = natural.PorterStemmer;
    const analyzer = new Analyzer("English", stemmer, "afinn");

    // Perform sentiment analysis
    try {
        const analysisResult = analyzer.getSentiment(sentence.split(' '));

        let sentiment = "neutral";

        // set sentiment to negative or positive based on score rules
        if(analysisResult < 0.14) sentiment = "negative";
        else if(analysisResult >= 0.33) sentiment = "positive"

        // Logging the result
        logger.info(`Sentiment analysis result: ${analysisResult}`);

        // return the sentiment txt
        return sentiment;
    } catch (error) {
        logger.error(`Error performing sentiment analysis: ${error}`);
        // if there is an error, throw the error with json {'message': 'Error performing sentiment analysis'}
        throw new Error({'message': 'Error performing sentiment analysis'});
    }
} 

// Add a new gift
router.post('/', async (req, res, next) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection("gifts");
        const gift = await collection.insertOne(req.body);

        res.status(201).json(gift.ops[0]);
    } catch (e) {
        next(e);
    }
});

module.exports = router;
