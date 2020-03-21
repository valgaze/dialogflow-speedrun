module.exports = hook;
const { WebhookClient } = require('dialogflow-fulfillment');
const handlerMap = new Map();
const registerHandler = (name, handler) => handlerMap.set(name, handler);
const util = require('./../util');
/* ****************** */


function hook(req, res) {
  const agent = new WebhookClient({ request:req, response: res });

  registerHandler('health', require('./../examples/ex1_healthcheck/health.intent.js'));
  registerHandler('kitchensink', require('./../examples/ex2_kitchensink/kitchensink.intent.js'));
  registerHandler('order.icecream', require('./../examples/ex3_icecream/icecream.intent.js'));







  



/* Two ways to do intents:
  * 1) Separate intent files:
    $ npm run create:intent

    * 2) In a big single file like the following:
    handlerMap.set('intent_name', (agent) =>  {
      agent.add('my handler response')
    });

    handlerMap.set('intent_name2', (agent) =>  {
      agent.add('my 2nd handler response')
    });
  *
  */


 agent.handleRequest(handlerMap);
}




// /***
//  * 1)  Create an app instance
//  * **/
const registerIntent = (name, handler) => {
  let handlerRef
  if (typeof handler === 'string') {
    try {
      require(handler);
    }catch(e) {
      throw new Error(`Incorrect path in handler setup for ${name}`)
    }
  } else {
    handlerRef = handler;
  }
}

// const util = require('./../util');

// /***
//  * 2)  Register intents (here broken out into files)
//  * **/


//  /* 
// Note: handlers are separated into individual files for convenience, example below 

// app.intent('intent_1', (conv, parameters) => {
//   conv.say('This intent 1!')
// })

// app.intent('intent_2', (conv, parameters) => {
//   conv.say('This intent 2!')
// })

// */
 
//   // Here's a "freebie" intent handler called healthcheck. If something isn't working
//   // first thing to do is ask your bot "health" or "are you feeling ok?"
//   // For more stuff see "troubleshooting_101.md" in the docs folder

//   // Ice Cream Intent Handler
//   const iceCreamHandler = require("./handlers/icecream.intent.js");
//   const intentName = "order.fooditem"; // Must match perfectly
//   iceCreamHandler(app, intentName);

//   // Demo Intent Handler
//   const demoIntentHandler = require("./handlers/demo.intent.js");
//   _activateHandler(demoIntentHandler, "Demo");
     
//   // Health Intent Handler
//   const healthIntentHandler = require("./handlers/health.intent.js");
//   _activateHandler(healthIntentHandler, "health");
  
//   // Asset Intent Handler
//   const assetIntentHandler = require("./handlers/asset.intent.js");
//   _activateHandler(assetIntentHandler, "asset.proof_of_concept");

//   // License.yes Intent Handler
//   const licenseYes = require("./handlers/license.yes.js");
//   _activateHandler(licenseYes, "licensing.proof_of_concept - yes");
  
//   // License.followup Intent Handler
//   const licenseFollowup = require("./handlers/license.followup.js");
//   _activateHandler(licenseFollowup, "license.followup");

//   // File Upload Handler
//   const KommunicateUpload = require("./handlers/kommunicate.upload.intent.js");
//   _activateHandler(KommunicateUpload, "kommunicate.upload");
  
//   // File Upload Handler
//   const KommunicateUploadFollowup = require("./handlers/kommunicate.upload.followup.js");
//   _activateHandler(KommunicateUploadFollowup, "kommunicate.upload.followup");
  
//    // tinker
//    const tinker = require("./handlers/tinker.js");
//    _activateHandler(tinker, "tinker");
   
  
//   // Fallback Intent Handler, messing with this to process file uploads
//   const ENABLE_FALLBACK_FULFILLMENT_HANDLER = false;
//   if (ENABLE_FALLBACK_FULFILLMENT_HANDLER) {
//     const fallback = require("./handlers/fallback.intent.js");
//     _activateHandler(fallback, "Default Fallback Intent");  
//   }

// /***
//  * 3)  Important: export app (it handles req/res)
//  * **/
// module.exports = app;

