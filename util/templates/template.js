// let map = require('./../../webhook/intent_map')

const fs = require("fs");
const path = require('path');

const content = fs.readFileSync('./../../webhook/intent_map.js', "utf8");

// Wild-man step: strip the require statements to get path
// Nice to require/import function in intent_map & easy for beginners
// We'll pre-process a bit here & stamp the function path in (ironica)
// This pre-processing step isn't necessary, but t
//  The non-coward's solution to this problem is dependency injection,
// it's more important that those functions are not intimidating to new users

const start = `require('`
const end = `')`
console.log("BOY#", content.replace(start, '').replace(end, ''), "\n#")
const map = []
/*
We'll use beelzebub lol

Workflow 1: Eject to Cloud Code
    > verify


here is the LOL of the year:
    > require takes all their dependcies with it
    > this is a MUCH more elegant

MAKE THIS ITS OWN REPO
dialogflow-fulfillment starter template

Batteries-included fulfillment for DialogFlow with the following features
    - eject express.js server
    - eject google-cloud
    - dialogflow-fulfillment + actions-on-google

Workflow 2: Create a full express node.js server
    > Live-reload
    > README.md
        > package.json
            Run scripts
                - start:reload
                - start
                - webhook:dev
                - 
      This will basically eject          
            config.js
            nodemon
            express

    > EJECTS TO New folder: "YAY_NEW_FILES"

*/

/* THE GOAL
Skip us having to iterate through the list every dang time when in cloud code

Current issue:
    - Our preferred way of doing things in the intent_map.js is that we require in
    all the modules

    - We don't want to have to worry about the main function importing any little intent's
    dependencies. (No "suggestions not found")

    - Currently, intent map uses require which makes sense and is fine for home dev bc


    - Pay the piper: we iterate through everytime function called (gotta lotta functions)

    What we really need is to get the require string somehow

Here's our dumb solution:
we'll read in the file as a string lol
We'll somehow rip out all the require statements

If I wasn't a coward: real solution here is DI. But don't want to make function scary-looking for new comers



*/
const gCloudTemplate = ({map}) => `
'use strict';

const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');

process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements

exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
  const intentMap = new Map();


  ${map.map(({name, handler}) => {
      // do we tie intentname to filename
      // tightly coupled
      // Dangouer
      // But isnt that exactly what we should be doing? enforce it?
      return "intentMap.set('" + name + "', require('" + handler +  "')"
   })}

  agent.handleRequest(intentMap);
});
`

  
console.log('gcloud', gCloudTemplate)