'use strict';

const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');

process.env.DEBUG = 'dialogflow:debug';

exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  const intentMap = new Map();
/* *************** *************** *************** */
   const handlerList = [{name: 'abc', handler: (x) => {console.log(x)}}]

   var registerIntents = (intentList, app, Map) => {
      intentList.forEach(({name, handler}, index) => {
        if (!name){
            throw new Error(`There is no property 'name' on list item #${index+1} `)
        }
        if (!handler){
          throw new Error(`There is no property 'handler' on list item #${index+1} `)
        }
        Map.set(name, handler)
      })
   }
   // register those intents!
   // Todo transpile right here and skip the loop
   registerIntents(handlerList, agent, intentMap)


  agent.handleRequest(intentMap);
});