/*
Add to list below an intent which needs:
Ex. 
{
    name: 'my special intent name',
    handler: './handlers/my.special.intent.js'
}

My objectives:
- 
- 
- actions-on-google, any required'd items

LOL those required things must be in scope

Add new intents to the list below (the must be separated by commas a
and have both names & handler)'

HOW WOULD THIS WORK WITH ACTIONS ON GOOGLE
HOW WOULD THIS WORK WITH DIALOGFLOW-FULFILLMENT
we need to prove this works with both; https://github.com/dialogflow/fulfillment-actions-library-nodejs/blob/master/functions/index.js


So that's not really possible with this simple version...grrr

If you need to mix & match:
- for aog,
    - add platform = actions.on.google
    - const conv = agent.conv()


- 
If we had a couple 


Grr this transpile would be nice but insane


Bc Ithink we just would pass in:
agent.conv()

function bongo(agent) {
    conv.
}
bongo(agent.conv())

*/

module.exports = [
    {
        name: 'health',
        handler: './handlers/health.intent.js'
    },
    {
        name: 'kitchensink',
        handler: './handlers/kitchensink.intent.js'

    },
    {
        name: 'order.icecream',
        handler: './handlers/icecream.intent.js'
    },

]; // End of list