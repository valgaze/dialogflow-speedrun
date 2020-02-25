const {
    Card,
    Image,
    Suggestion,
} = require('dialogflow-fulfillment');

module.exports = function(agent) {    

    agent.add(`This is the kitchen sink intent!`);
    agent.add(`>> Look, a 'Card'!`);
    agent.add(new Card({
        title: 'Title of Card',
        text: 'Body of card',
        imageUrl: 'https://i.imgur.com/SW78JRd.jpg',
        buttonText: 'Click this button!',
        buttonUrl: 'https://cloud.google.com/dialogflow',
    }));

    agent.add(`>> Look, an 'Image'`);
    agent.add(new Image('https://i.imgur.com/SW78JRd.jpg'));

    agent.add(`>> Look, a 'Suggestion' (aka a 'chip')!`);
    agent.add(new Suggestion('Show me kitchen sink again!'));
}