const argv = require('minimist')(process.argv.slice(2));
const handler = require('./webhook');
const util = require('./util');
const config = require('./config.js');
const { webhook, port = 3000 } = util.sanitize(config);
const { server } = require('./server.webhook.js');
const { messages } = require('./util/message.js');
const skipnGrok = argv.skip;

if (skipnGrok) {
    // Don't load nGrok
    server.init({port, webhook, handler},  () => console.log(messages.nGrok_skip(port)));    
}  else {
    // Start server, nGrok
    server.init({port, webhook, handler});
}