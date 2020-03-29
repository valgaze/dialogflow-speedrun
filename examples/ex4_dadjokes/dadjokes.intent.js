const { 
    Card,
    Suggestion,
} = require('dialogflow-fulfillment');
const axios = require('axios');

/*
* IMPORTANT: See README in /examples for how to
* activate this intent handler
*
*/

module.exports = async function(agent) {
    const { parameters } = agent;
    const get = (url) => axios({ method: 'GET', headers: { 'Accept': 'application/json' }, url:url })
  
    const helpers = {
        getRandomJoke() {
            return get(`https://icanhazdadjoke.com`);
        },
        searchForJoke(query) {
            return get(`https://icanhazdadjoke.com/search?term=${query}`);
        },
        cycler(arr) {
            return arr[Math.floor(Math.random()*arr.length)]
        },
        buildResponse(prefix, joke) {
            // Combine a prefix and the joke from API
            // ex. 'This is an old favorite: Where do cats write notes? Scratch Paper!'
            const response = `${prefix}: ${joke}`
            return response;
        }

    }
    // Vary up prefix

    const prefixes = [
        'Ok, I got it',
        `You'll love this one`,
        'This is a great joke',
        'This is an old favorite',
        'Think hard about this one',
        `Medidate on this`
    ]

    // Note: Speed matters, everything below must resolve within 5 seconds
        // https://dialogflow.com/docs/fulfillment/how-it-works
        // https://developers.google.com/actions/sdk/deploy-fulfillment

    
    // Everything below must happen with 5 seconds
    const jokeRes = await helpers.getRandomJoke();
    const { joke, id } = jokeRes.data;

    // Vary up response text, select random prefix from list
    const prefix = helpers.cycler(prefixes)

    const response = helpers.buildResponse(prefix, joke)

    // Rich card response
    const randomImage = `https://source.unsplash.com/random/300x200`;
    agent.add(new Card({
        title: `Here's a dad joke...`,
        text: response,
        imageUrl: randomImage,
        buttonText: `See Dad Joke`,
        buttonUrl: `https://icanhazdadjoke.com/j/${id}`
    }));

    // ex. text-only response
    // agent.add(`Here's the joke: ${response}`);

}
