# Idols Initiatives
* A React and GraphQL site to search 

## Description
* This is an e-commerce site originally built using React's built in Context for global state management.  It has been refactored to utilize the third party Redux.

* The backend is a Node.js server hosted on Heroku utilizing a MongoDB Atlas NoSQL via GraphQL.

* The frontend was built using React and is an e-commerce site called Shop-Shop which sells goods.  Users can create a login, browse, add items to cart and then purchase via Stripe.

## Links
* [GitHub Repo Link](https://github.com/taylornyquist/shop-shop-redux)
* [Link to Deployed Application](https://mysterious-wildwood-94060.herokuapp.com/)

## Screen Shots

<img src="./client/public/screen-shots/screen-shot1.png" alt="" />
<img src="./client/public/screen-shots/screen-shot2.png" alt="" />
<img src="./client/public/screen-shots/screen-shot3.png" alt="" />
<img src="./client/public/screen-shots/screen-shot4.png" alt="" />
<img src="./client/public/screen-shots/screen-shot5.png" alt="" />

## Table of Contents

* [Usage](#usage)
* [Installation](#installation)
* [Run](#run)
* [Technology](#technology)
* [Questions](#questions)
* [Contribution](#contribution)

## Usage
Visit the Heroku [link](https://mysterious-wildwood-94060.herokuapp.com/) to use the deployed application.  There you can create a login, browse, add to cart and checkout.

To run application locally, go to GitHub to clone the repo on your machine.

## Installation
To install necessary dependencies, run the following command:
```
npm init
```
```
npm install
```
This should install the following dependencies into package.json:

Root package.json:
```
 "dependencies": {
    "if-env": "^1.0.4"
  },
  "devDependencies": {
    "concurrently": "^5.1.0"
  }
```

Server package.json:
```
  "dependencies": {
    "apollo-server-express": "^2.11.0",
    "bcrypt": "^4.0.1",
    "express": "^4.17.1",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^5.9.7",
    "stripe": "^8.119.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.2"
  }
```

Client package.json:
```
  "dependencies": {
    "@apollo/react-hooks": "^3.1.3",
    "@stripe/stripe-js": "^1.11.0",
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.5.0",
    "@testing-library/user-event": "^7.2.1",
    "apollo-boost": "^0.4.7",
    "apollo-link-context": "^1.0.20",
    "graphql": "^14.6.0",
    "graphql-tag": "^2.10.3",
    "jwt-decode": "^2.2.0",
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "react-redux": "^7.2.2",
    "react-router-dom": "^5.1.2",
    "react-scripts": "3.4.1",
    "redux": "^4.0.5",
    "redux-devtools-extension": "^2.13.8"
  },
```

## Run
To run the application as a local host, run:

```
npm run seed
```

```
npm start
```

## Technology
This application used the following technology:

* HTML
* CSS
* JavaScript
* Node.js
* Express.js
* MongoDB
* Mongoose JS
* React
* React Router
* Redux
* Redux DevTools
* GraphQL
* Apollo
* JSON Web Tokens
* bcrypt
* Stripe

## Questions
If you have any questions about the repo, open an issue or contact me directly at tnyquist@gmail.com.  You can find more of my work at [taylornyquist](https://github.com/taylornyquist).


## Contribution
* Taylor Nyquist