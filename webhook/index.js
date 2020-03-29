module.exports = hook;
const { WebhookClient } = require('dialogflow-fulfillment');
const handlerMap = new Map();
const registerHandler = (name, handler) => handlerMap.set(name, handler);
/* ****************** */


function hook(req, res) {
  const agent = new WebhookClient({ request:req, response: res });

  registerHandler('health', require('./../examples/ex1_healthcheck/health.intent.js'));
  
  // registerHandler('kitchensink', require('./../examples/ex2_kitchensink/kitchensink.intent.js'));
  
  // registerHandler('order.icecream', require('./../examples/ex3_icecream/icecream.intent.js'));
  
  // registerHandler('dadjokes', require('./../examples/ex4_dadjokes/dadjokes.intent.js'));



  // IMPORTANT: Atttach map of intents & handler for use when DialogFlow hits webhook
  agent.handleRequest(handlerMap);
}



  /* 
   * 
   *
     1) Separate intent files:
        $ npm run create:intent
          registerHandler('intent 123', require('./../webhook/123handler.intent.js'));

     2) In a big single file like the following:
        const handlerMap = new Map();
        const agent = new WebhookClient({
          request: req,
          response: res
        });

        handlerMap.set('intent_name', (agent) =>  {
          agent.add('my handler response')
        });

        handlerMap.set('intent_name2', (agent) =>  {
          agent.add('my 2nd handler response')
        });

        agent.handleRequest(handlerMap);
    *
    *
    */
