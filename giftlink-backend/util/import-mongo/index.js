require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
const fs = require('fs');

// MongoDB connection URL with authentication options
let url = `${process.env.MONGO_URL}`;
let filename = `${__dirname}/gifts.json`;
const dbName = 'giftdb';
const collectionName = 'gifts';

// notice you have to load the array of gifts into the data object
const data = JSON.parse(fs.readFileSync(filename, 'utf8')).docs;

// connect to database and insert data into the collection
async function loadData() {
    const client = new MongoClient(url);

    try {
        // Connect to the MongoDB client
        await client.connect();
        console.log("Connected successfully to server");

        // database will be created if it does not exist
        const db = client.db(dbName);

        // collection will be created if it does not exist
        const collection = db.collection(collectionName);
        let cursor = await collection.find({});
        let documents = await cursor.toArray();

        if(documents.length == 0) {
            // Insert data into the collection
            const insertResult = await collection.insertMany(data);
            console.log('Inserted documents:', insertResult.insertedCount);
        } else {
            console.log("Gifts already exists in DB")
        }
    } catch (err) {
        console.error(err);
    } finally {
        // Close the connection
        await client.close();
    }
}

// connect to database and insert data into the collection
async function updateData() {
    const client = new MongoClient(url);

    try {
        // Connect to the MongoDB client
        await client.connect();
        console.log("Connected successfully to server");

        // database will be created if it does not exist
        const db = client.db(dbName);

        // collection will be created if it does not exist
        const collection = db.collection(collectionName);

        // Update data into the collection
        const updateResult = await collection.bulkWrite([{ updateOne: { 
                filter: { id: "875" }, 
                update: { $set: { comments: [{
                    author: "John Doe",
                    comment: "I would like this!"
                },
                {
                    author: "Jane Smith",
                    comment: "Just DMed you."
                },
                {
                    author: "Alice Johnson",
                    comment: "I will take it if it's still available."
                },
                {
                    author: "Mike Brown",
                    comment: "This is a good one!"
                },
                {
                    author: "Sarah Wilson",
                    comment: "My family can use one. DM me if it is still available. Thank you!"
                }] 
                } } 
            } },
            { updateOne: { 
                filter: { id: "396" }, 
                update: { $set: { comments: [{
                    author: "John Doe",
                    comment: "I would like this!"
                },
                {
                    author: "Jane Smith",
                    comment: "My family can use one. DM me if it is still available. Thank you!"
                },
                {
                    author: "Alice Johnson",
                    comment: "I will take it if it's still available."
                },
                {
                    author: "Mike Brown",
                    comment: "This is a good one!"
                },
                {
                    author: "Sarah Wilson",
                    comment: "Not as shown in image. Dont't go for it."
                }] 
                } } 
            } },
            { updateOne: { 
                filter: { id: "812" }, 
                update: { $set: { comments: [{
                    author: "John Doe",
                    comment: "I would like this!"
                },
                {
                    author: "Jane Smith",
                    comment: "My family can use one. DM me if it is still available. Thank you"
                },
                {
                    author: "Alice Johnson",
                    comment: "I will take it if it's still available."
                },
                {
                    author: "Mike Brown",
                    comment: "This is a good one!"
                },
                {
                    author: "Sarah Wilson",
                    comment: "Thank you! worth taking"
                }] 
                } } 
            } },
            { updateOne: { 
                filter: { id: "386" }, 
                update: { $set: { comments: [{
                    author: "John Doe",
                    comment: "I would like this!"
                },
                {
                    author: "Jane Smith",
                    comment: "Just DMed you."
                },
                {
                    author: "Alice Johnson",
                    comment: "I will take it if it's still available."
                },
                {
                    author: "Mike Brown",
                    comment: "My family can use one. DM me if it is still available. Thank you!"
                },
                {
                    author: "Sarah Wilson",
                    comment: "Stop gifting useless products"
                }] 
                } } 
            } },
            { updateOne: { 
                filter: { id: "419" }, 
                update: { $set: { comments: [{
                    author: "John Doe",
                    comment: "I would like this!"
                },
                {
                    author: "Jane Smith",
                    comment: "My family can use one. DM me if it is still available. Thank you!"
                },
                {
                    author: "Alice Johnson",
                    comment: "Nice product. I will take it if it's still available."
                },
                {
                    author: "Mike Brown",
                    comment: "This is a good one!"
                },
                {
                    author: "Sarah Wilson",
                    comment: "Thank you! Glad to recieve it.. awesome product"
                }] 
                } } 
            } },
            { updateOne: { 
                filter: { id: "420" }, 
                update: { $set: { comments: [{
                    author: "John Doe",
                    comment: "I would like this!"
                },
                {
                    author: "Jane Smith",
                    comment: "Just DMed you."
                },
                {
                    author: "Alice Johnson",
                    comment: "I will take it if it's still available."
                },
                {
                    author: "Mike Brown",
                    comment: "This is a good one!"
                },
                {
                    author: "Sarah Wilson",
                    comment: "Why are you gifting it instead of selling you could earn money from it"
                }] 
                } } 
            } },
            { updateOne: { 
                filter: { id: "421" }, 
                update: { $set: { comments: [{
                    author: "John Doe",
                    comment: "I would like this!"
                },
                {
                    author: "Jane Smith",
                    comment: "Just DMed you."
                },
                {
                    author: "Alice Johnson",
                    comment: "I will take it if it's still available."
                },
                {
                    author: "Mike Brown",
                    comment: "This is a good one!"
                },
                {
                    author: "Sarah Wilson",
                    comment: "Plz remove unavailable products"
                }] 
                } } 
            } },
            { updateOne: { 
                filter: { id: "422" }, 
                update: { $set: { comments: [{
                    author: "John Doe",
                    comment: "I would like this!"
                },
                {
                    author: "Jane Smith",
                    comment: "Just DMed you."
                },
                {
                    author: "Alice Johnson",
                    comment: "I will take it if it's still available."
                },
                {
                    author: "Mike Brown",
                    comment: "This is a good one!"
                },
                {
                    author: "Sarah Wilson",
                    comment: "My family can use one. DM me if it is still available. Thank you!"
                }] 
                } } 
            } },
            { updateOne: { 
                filter: { id: "423" }, 
                update: { $set: { comments: [{
                    author: "John Doe",
                    comment: "I would like this!"
                },
                {
                    author: "Jane Smith",
                    comment: "Just DMed you."
                },
                {
                    author: "Alice Johnson",
                    comment: "I will take it if it's still available."
                },
                {
                    author: "Mike Brown",
                    comment: "This is a good one!"
                },
                {
                    author: "Sarah Wilson",
                    comment: "My family can use one. DM me if it is still available. Thank you!"
                }] 
                } } 
            } },
            { updateOne: { 
                filter: { id: "424" }, 
                update: { $set: { comments: [{
                    author: "John Doe",
                    comment: "I would like this!"
                },
                {
                    author: "Jane Smith",
                    comment: "Just DMed you."
                },
                {
                    author: "Alice Johnson",
                    comment: "I will take it if it's still available."
                },
                {
                    author: "Mike Brown",
                    comment: "This is a good one!"
                },
                {
                    author: "Sarah Wilson",
                    comment: "My family can use one. DM me if it is still available. Thank you!"
                }] 
                } } 
            } },
            { updateOne: { 
                filter: { id: "425" }, 
                update: { $set: { comments: [{
                    author: "John Doe",
                    comment: "I would like this!"
                },
                {
                    author: "Jane Smith",
                    comment: "Just DMed you."
                },
                {
                    author: "Alice Johnson",
                    comment: "I will take it if it's still available."
                },
                {
                    author: "Mike Brown",
                    comment: "This is a good one!"
                },
                {
                    author: "Sarah Wilson",
                    comment: "My family can use one. DM me if it is still available. Thank you!"
                }] 
                } } 
            } },
            { updateOne: { 
                filter: { id: "426" }, 
                update: { $set: { comments: [{
                    author: "John Doe",
                    comment: "I would like this!"
                },
                {
                    author: "Jane Smith",
                    comment: "Just DMed you."
                },
                {
                    author: "Alice Johnson",
                    comment: "I will take it if it's still available."
                },
                {
                    author: "Mike Brown",
                    comment: "This is a good one!"
                },
                {
                    author: "Sarah Wilson",
                    comment: "My family can use one. DM me if it is still available. Thank you!"
                }] 
                } } 
            } },
            { updateOne: { 
                filter: { id: "427" }, 
                update: { $set: { comments: [{
                    author: "John Doe",
                    comment: "I would like this!"
                },
                {
                    author: "Jane Smith",
                    comment: "Just DMed you."
                },
                {
                    author: "Alice Johnson",
                    comment: "I will take it if it's still available."
                },
                {
                    author: "Mike Brown",
                    comment: "This is a good one!"
                },
                {
                    author: "Sarah Wilson",
                    comment: "My family can use one. DM me if it is still available. Thank you!"
                }] 
                } } 
            } },
            { updateOne: { 
                filter: { id: "428" }, 
                update: { $set: { comments: [{
                    author: "John Doe",
                    comment: "I would like this!"
                },
                {
                    author: "Jane Smith",
                    comment: "Just DMed you."
                },
                {
                    author: "Alice Johnson",
                    comment: "I will take it if it's still available."
                },
                {
                    author: "Mike Brown",
                    comment: "This is a good one!"
                },
                {
                    author: "Sarah Wilson",
                    comment: "My family can use one. DM me if it is still available. Thank you!"
                }] 
                } } 
            } },
            { updateOne: { 
                filter: { id: "429" }, 
                update: { $set: { comments: [{
                    author: "John Doe",
                    comment: "Looks so cheap!"
                },
                {
                    author: "Jane Smith",
                    comment: "Stop selling broken products"
                },
                {
                    author: "Alice Johnson",
                    comment: "No one will buy this useless product."
                },
                {
                    author: "Mike Brown",
                    comment: "This is a bad one!"
                },
                {
                    author: "Sarah Wilson",
                    comment: "Looks damaged. Mistakenly brought this junk."
                }] 
                } } 
            } },
            { updateOne: { 
                filter: { id: "430" }, 
                update: { $set: { comments: [{
                    author: "John Doe",
                    comment: "I would like this!"
                },
                {
                    author: "Jane Smith",
                    comment: "Just DMed you."
                },
                {
                    author: "Alice Johnson",
                    comment: "I will take it if it's still available."
                },
                {
                    author: "Mike Brown",
                    comment: "This is a good one!"
                },
                {
                    author: "Sarah Wilson",
                    comment: "My family can use one. DM me if it is still available. Thank you!"
                }] 
                } } 
            } }
        ]);
        console.log('Updated documents:', updateResult);
    } catch (err) {
        console.error(err);
    } finally {
        // Close the connection
        await client.close();
    }
}

// loadData();
// updateData();

module.exports = {
    loadData,
  };
