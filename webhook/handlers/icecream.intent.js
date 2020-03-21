const { 
    Card,
    Suggestion,
} = require('dialogflow-fulfillment');

/*
* IMPORTANT: See README in /examples for how to
* activate this intent handler
*
*/

module.exports = function(agent) {
    const {parameters} = agent;

    // Extract entities icecream-flavor & icecream-size
    // Note: The names are shortened to just "flavor" & "size" 
    // convenience below
    const { 'icecream-flavor': flavor, 'icecream-size': size } = parameters; // "flavor", "size" now available


    const icecreamHash = {
        chocolate: 'https://i.imgur.com/uMtF8ah.jpg',
        vanilla: 'https://i.imgur.com/zqKeYU5.jpg',
        strawberry: 'https://i.imgur.com/GSZEI39.jpg',
        mint: 'https://i.imgur.com/W9Eeuu1.jpg',
      };

    const icecreamImageURL = icecreamHash[flavor];
    
    agent.add(new Card({
        title: `We've got ${flavor} coming up`,
        text: `Here is your ${size} 🍦!!! This type of ${flavor} ice cream is great  \nEverybody after this line break loves it.`,
        imageUrl: icecreamImageURL,
        buttonText: `Learn more about ${flavor}`,
        buttonUrl: `https://www.google.com/search?q=${flavor}`
    }));

    agent.add(new Suggestion('I want another ice cream!'))
}
