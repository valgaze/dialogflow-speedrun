## Description

**[>> Jump to Demonstration](#Diagram/Screenshots)**

Think of this as a tiny welcome-to-DialogFlow example. We'll dive right in and immediately make an intent that uses **[DialogFlow's fulfillment feature.](https://cloud.google.com/dialogflow/docs/fulfillment-overview)** 

What we're building first is a handy "helper" intent that you can always use to make sure everything is working correctly with your webhook. If you type "health" and see chocolate chip cookies you'll know it's working.

What we'll do in this example is create an intent called "health" with training phrases like "health" or "healthcheck." This intent will specify that it uses fulfillment (so DialogFlow knows to ) and will return the user a rich card with the current time on the server.

You can make the health intent by hand or (much faster) importing Archive.zip. 

If you can type "health" and you see a response in the DialogFlow simulator that means it's working!

## Setup

For details on how to run this and any other example, see the ["Running the Examples" Guide in the docs directory](./../../docs/running_the_examples.md)

1) Import Agent.zip to load intents & other configuration to the DialogFlow web console

2) Add the following to **[webhook/index.js](./../../webhook/index.js)**:


```js
registerHandler('health', require('./../examples/ex1_healthcheck/health.intent.js'));
```

## Diagram/Screenshots

We're making this:

![demo](../assets/examples/healthcheck.gif)