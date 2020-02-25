
const fs = require('fs');
const blessed = require('blessed');
const contrib = require('blessed-contrib');

module.exports = {
    sanitize,
    loud,
    exists,
    copy,
    _buildDashboard,
}

// sneaky trick for circular dependencies
const { nGrok } = require('./ngrok');
module.exports.nGrok = nGrok;

// Really should be run once on startup
// Verifies port & webhook present in config.js
// Adjusts webhook to follow form of /webhook
function sanitize(config) {
    const output = {
      port: null,
      webhook: null,
    }
  // 1) mercy check port
    const PORT_REF = config.port || config.PORT;
    if (!PORT_REF) {
      // Sorry pal, no port, no service
       throw new Error(`Missing propery 'port' in config.js. Exiting...`)
    }
  // 2) webhook mercy check
    // This will completely eliminate subtle user-error malfunction
    // This gets appended to nGrok's URL and is what gets
    // called by DialogFlow's API. Doesn't need to be a specific route
        let WEBHOOK_REF = config.webhook || config.WEBHOOK;
        if (!WEBHOOK_REF) {
          throw new Error(`Missing propery 'webhook' in config.js. Exiting...`)
        }

        // Append leading slash
        if (WEBHOOK_REF.charAt(0) !== '/') {
          WEBHOOK_REF = `/${WEBHOOK_REF}`;
        }

        // Discard trailing slash
        // Can definitely have deeply nested, no need for trail
        if (WEBHOOK_REF.charAt(WEBHOOK_REF.length - 1) === '/') {
          WEBHOOK_REF = WEBHOOK_REF.slice(0, WEBHOOK_REF.length - 1);
        }
  
        return {
          port: PORT_REF,
          webhook: WEBHOOK_REF
        }
}

function exists(path) {
  return new Promise((resolve, reject) => {
    fs.access(path, fs.F_OK, (err) => {
        if (err) {
            resolve(false);
        } else {
            resolve(true);
        }
    });
  });
}

function copy(source, destination) {
  return new Promise((resolve, reject) => {
    fs.copyFile(source, destination, (err) => {
      if (err) reject(err);
      resolve(true);
    });
  });
}

// show-stopper errors, use like salt
function loud(data) {
    console.log("\n\n#####\n\n");
    console.log(data);
    console.log("\n\n#####\n\n")
}

// function _buildDashboard({welcomeMsg, heroTitle = 'Fulfillment Webhook'}) {
function _buildDashboard() {
    const screen = blessed.screen();
    
    const grid = new contrib.grid({rows: 12, cols: 12, screen: screen});
    const state = {
        url: null,
        status: 0,
    }
 
    const buildHero = (content='', opts) => {
      const hero = grid.set(0, 0, 3, 12, contrib.log, 
        { 
          fg: 'red', 
          selectedFg: 'green', 
          // label: heroTitle,
            ...opts,
            content
      });
      screen.render();
    }

    const buildHero2 = (content='', opts) => {
      const hero = grid.set(3, 0, 2, 12, contrib.log, 
        { 
          fg: 'red', 
          selectedFg: 'green', 
          // label: heroTitle,
            ...opts,
            content
      });
      screen.render();
    }

    const buildLeftBox = (content='', opts) => {
      const hero = grid.set(3, 6, 3, 12, contrib.log, 
        { 
          fg: 'red', 
          selectedFg: 'green', 
          label: heroTitle,
            ...opts,
            content
      });
      screen.render();
    }

    const buildRightBox = (content='', opts) => {
      const hero = grid.set(3, 0, 3, 12, contrib.log, 
        { 
          fg: 'red', 
          selectedFg: 'green', 
            ...opts,
            content
      });
      screen.render();
    }

    screen.render();


    return {
      buildHero,
      buildHero2,
      buildRightBox,
      buildLeftBox,
      screen,
    }
}