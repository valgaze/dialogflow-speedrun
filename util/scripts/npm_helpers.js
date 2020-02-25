const argv = require('minimist')(process.argv.slice(2));

(async function() {
    switch(argv.e) {
        case 'gcloud':
            gCloud();
          break;
        case 'express':
            express();
          break;
        case 'newintent':
            newIntent();
        default:
            noop();
      }
})();

async function gCloud() {
/* ex. POC
    const func = require('../templates/_handler/intent.template.js');
    console.log('##', func.toString());
    const funcBody = func.toString();
    const wrap = (funcBody) => `agent.intent('name', ${funcBody}`)
*/
    console.log(`
Eject workflow for event handlers into gCloud functions, follow this template:

https://github.com/dialogflow/fulfillment-webhook-nodejs
`)
}

async function express() {
    console.log(`
Eject workflow for into simple server

`)
}

function noop() {}