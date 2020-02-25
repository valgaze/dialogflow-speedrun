const { 
    Card,
    Suggestion,
} = require('dialogflow-fulfillment');

/*
* IMPORTANT: See README in /examples/02__icecream
* for how to set up in the DialogFlow web console
*
*/

module.exports = function(agent) {
    const {parameters} = agent;

    const {
        icecreamsize,
        icecreamflavor
    } = parameters;

    const icecreamHash = {
        chocolate: 'https://i.imgur.com/uMtF8ah.jpg',
        vanilla: 'https://i.imgur.com/zqKeYU5.jpg',
        strawberry: 'https://i.imgur.com/GSZEI39.jpg',
        mint: 'https://i.imgur.com/W9Eeuu1.jpg',
      };

    const icecreamImageURL = icecreamHash[icecreamflavor];
    
    agent.add(new Card({
        title: `We've got ${flavor} coming up`,
        text: `Here is your 🍦!!! This type of ${flavor} ice cream is great  \nEverybody after this line break loves it.`,
        imageUrl: icecreamImageURL,
        buttonText: `Learn more about ${flavor}`,
        buttonUrl: `https://www.google.com/search?q=${flavor}`
    }));

    agent.add(new Suggestion('I want another ice cream!'))
}

