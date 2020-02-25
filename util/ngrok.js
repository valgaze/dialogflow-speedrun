const ngrok = require('ngrok');
const argv = require('minimist')(process.argv.slice(2));
const util = require('./index');
const { messages } = require('./message.js');
 

// $ npm run tunnel
//  - Runs nGrok separately from server
//  - Useful to live-reload server indepdent of nGrok
// Terminal 1: $ npm run tunnel
// Terminal 2: $ npm run server # 
// (or $ npm run server:dev with live reload)
if (argv.t) {
    (async function() {
        const config = require('../config.js');
        const { webhook, port = 3000 } = util.sanitize(config);
        const { 
        buildHero,
        buildHero2,
        screen,
       } = util._buildDashboard({});
       let url;
        if (argv.d) {
            // Disable actually tunneling
            url = `http://DEBUG.fakengrok.io`;
        } else {
            url = await nGrok(port);
        }

        buildHero(messages.nGrokOnly({url, webhook}), {label: `${url}${webhook}`});
        // buildHero2('Awaiting requests...', {label: 'Requests'});
    
    })();
}

module.exports = {
    nGrok,
}

function nGrok(port) {
    return new Promise((resolve, reject) => {
        if (!port){
            reject('No Port specified')
        }

      const nGrokConfig = {
        proto: 'http', // http|tcp|tls, defaults to http
        addr: port, // port or network address, defaults to 80
        onStatusChange(status) {},
        onLogEvent(data) {}
      }
      const url = ngrok.connect(nGrokConfig).then(resolve).catch(reject);
      return url;
    });
}
// This will return a promise with the URL

// npm run tunnel
    // cd util && node standalone-ngrok.js

// standalone-ngrok.js
    /*

    (async function() {
        const nGrok = require('ngrok');
    })()

    
    // todo
    implement above
    break out messages into external messages object
    start passing events goddamnit lol
    make npm run tunnel

    DOC
    ngrok_101.md
        - Two ways to use nGrok here
            - All in one: you'll launch your server & nGrok together (EASY)
            npm start
            Downside: 
    */