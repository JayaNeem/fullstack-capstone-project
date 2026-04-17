# GiftLink

## Overview
The application connects users who wish to give away household items ​they no longer need with users who enjoy recycling and prefer to find free ​household items to match their taste rather than purchasing new ones.

## Features
- A Home page with a button linking to gift listing page.
- A Navigation bar with links to home, gift listing, search, login and register page.
- A card for each gift that showcase different gift along with a button to view their details.
- Search function allows user to search listing posted by other users based on various fields.
- Register and Login functionality to allow user to access to protected resources. 
- On Login navigation bar displays "Welcome" greeting with users first name and a Logout button in place of Register and Login button.
- Details page contains the description provided by the user gifting the item, a comment section to let users communicate about that item and overall comment sentiment.
- Clicking on user name navigates to user profile page where he can edit his username.

## Tech Stack
- React
- REST APIs
- Node.js
- Express
- Authentication using JWT
- MongoDB
- Containerization (Docker)
- Orchestration (Kubernetes)
- IBM code engine

## Project Flow
1. User Clicks Get started button.
2. Redirected to main page listing all the gifts.
3. User Clicks Search link in Navbar. 
4. Redirected to the search page.
5. User apply filters like Category, Condition, age.
6. A Get REST API is sent to the server which queries database then responds with the search result json string.
7. User selects a gift to view details.
8. The Application founds no token stored in sessionStorage so user is redirected to Login page.
9. User Registers.
10. User's detail are saved in the database and JWT token returned by the server which is stored in sessionStorage and login state flag is set in React Context.
11. Navigation bar re-renders and displays User's First Name.
12. User Clicks on a gift to view it's details.
13. The details page fetch gift details from server to provide description about the item along with comments and overall comment sentiment.
14. User Clicks on User name provided in navigation link.
15. User is redirected to profile page.
16. The User Logs out by clinking on logout button.
17. SessionStorage cleared and React Context updates.
18. Navbar re-renders show Login and register button.

## Installation & Setup
Clone the repository  
git clone https://github.com/your-username/project-name.git

#### Populate database
Start a mongodb database service

Navigate into the folder  
cd fullstack-capstone-project/giftlink-backend/util/import-mongo  
Duplicate the .env.sample and name the new file .env  
Modify the link by replacing the Host Id and password

Run below commands  
npm install  
npm start

#### Run the application
Copy the MongoDB password and paste it in .env in the giftlink-backend folder  
Open a terminal  
Navigate into the giftlink-backend folder  
Run below commands  
npm install  
npm run dev  
Navigate into the giftlink-frontend folder  
Rename the .env.sample to.env  
Copy and Paste the link serving the backend (without / at end)  
Open a new terminal  
Run below commands  
npm install  
npm run build  
npm start

## Key Concepts Learned
- Creating user stories using GitHub's Kanban Board 
- Setup MongoDB database
- Perform Sentiment Analysis
- Containerize the application
- Deploy containers using Kubernetes.

## Future Improvements
- Restoring login state after refresh.

## Notes
This project was created as part of a Coursera lab.
