## Local Development

DialogFlow Speedrun will get you quickly get up and running writing agents that can do real work.

If you haven't already, clone & setup the speedrun repo:

```sh
git clone https://github.com/valgaze/dialogflow-speedrun
cd dialogflow-speedrun
npm i
```

The following commands can be run from the root dialogflow-speedrun directory: 

|  **Command** | **Description** |
| :---: | :---: |
|  npm start | Starts BOTH server + nGrok in single terminal (no live-reload) |
|  npm run server | Start server ONLY (no nGrok, no live-reload) |
|  npm run tunnel | Start nGrok tunnel for the port specified in config.js |
|  npm run create:intent | Scaffold a new intent in webhook/handlers |

**Important:** Each time you restart nGrok/tunnel you will be assigned a new URL and will need to update it in DialogFlow's fulfillment settings

See the **[quickstart](./quickstart.md)** for details setting up a quick and ergonomic webhook development environment