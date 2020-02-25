const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const util = require('./util');
const { messages } = require('./util/message.js');

/**
 * 
 * SERVER
 * Port from config
 * Endpoint from config
 * 
 */
module.exports = {
  server: {
    init({ port, webhook, handler }, skip) {
      const skip_nGrok = skip && typeof skip === 'function';

      // Express config
      const app = express();
      app.use(bodyParser.json()); // support json encoded bodies
      app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

      // Handlers      
      app.post(webhook, handler);

      app.get("/", (req, res) => {
        res.sendFile(path.resolve(__dirname, "./index.html"));
      });

      app.get("/heartbeat", (req, res) => res.send(`Alive ${new Date()}`));
      
      if (skip_nGrok) {
        // Server only no tunnel (tunnel in separate window)
        app.listen(port, skip);
      } else {
        // Combine nGrok, server one view
        app.listen(port, () => {
          util.nGrok(port).then((payload) => {
              const url = payload;
              const { buildHero, buildHero2 } = util._buildDashboard({});
              buildHero(messages.nGrokServer({url, webhook, port}) , {label: payload});
          }).catch((e) => {
            console.log('#', e);
            util.loud('Error ' + JSON.stringify(e))
          });
       })        
      }
  
    }
  }
}
