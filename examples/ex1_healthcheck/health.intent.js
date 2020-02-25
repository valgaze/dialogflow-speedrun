const {
    Card,
    // Image,
    // Suggestion,
} = require('dialogflow-fulfillment');

module.exports = function(agent) {

    agent.add(`Server is good! ${new Date()}`);
    agent.add(new Card({
        title: 'Server is 👍',
        text: 'If you see this card your fulfillment code is working',
        imageUrl: 'https://i.imgur.com/SW78JRd.jpg',
        buttonText: `Celebrate a working fulfillment backend`,
        buttonUrl: `https://www.youtube.com/watch?v=3GwjfUFyY6M`
    }));
}