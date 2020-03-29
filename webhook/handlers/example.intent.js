// Same intent
// $ npm run create:intent
// Register in index.js
const {
    // Card,
    // Image,
    // Suggestion,
} = require('dialogflow-fulfillment');

const { 
    contexts, 
} = require('../CONSTANTS');

module.exports = function(agent) {

    //  Your code here :D

    agent.add(`This intent fired!`);
    const randomNum = Math.random();
    agent.add(`Here's a random number ${randomNum}`)
    




}