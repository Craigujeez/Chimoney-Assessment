This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Start up Instructions : To run this applicaton on the frontend, you need to cd into the client folder from the terminal and run "npm install" then "npm start". however not that the payment service would not work as it requires the backend server to be up and running . to fix this cd into the server folder and start the server.

Description: It is an Ecommerce application where users can shop for various fashion items. i decided to use redux for state storage cause it is a more scalable implemantation as opposed to using local storage. also wrote the css in vanilla css without any css framework or library so that the code is easier to read and understand. I used Stripe to handle the payments partly because i am very familiar with their infrastructure and also because the legacy checkout ui fits the general app ui alot better than the current one on my opinion.

Server: this ia a basic node.js server with express. it is a requirement for integrating with stripe for payments. it handles just the payments , nothing extra.
