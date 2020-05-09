# Resources

Learning DialogFlow is very much a team sport. Below's a "highlight reel" of excellent DialogFlow resources & writing, both official & unofficial:

- [Libraries](#Libraries)

- [Official Samples](#Official-Samples)

- [Great 3rd Party Resources](#Great-3rd-Party-Resources)

- [Full "End to end" Resources](#End-to-End-Articles)

## Libraries

**[NodeJS Client for DialogFlow](https://www.npmjs.com/package/dialogflow)** Use this library if you want to control each "turn" of the conversation (ie you're responsible for POST'ing user text to DialogFlow's API, get the response, render it, etc etc)

- Source: https://github.com/googleapis/nodejs-dialogflow

- Documentation: https://googleapis.dev/nodejs/dialogflow/latest/index.html

**[DialogFlow-fulfillment](https://www.npmjs.com/package/dialogflow-fulfillment)** This is a library for **["fulfillment"](https://cloud.google.com/dialogflow/docs/fulfillment-overview)**(where DialogFlow calls into your system's webhook to retrieve data or perform some work.) This is also what DialogFlow's **[inline editor](https://cloud.google.com/dialogflow/docs/fulfillment-inline-editor)** uses for fulfillment code. Note that **[as of January 2020](https://github.com/dialogflow/dialogflow-fulfillment-nodejs/commit/86a844a34ce61a665fa3687afe91af68b3dca0b8)** it is no longer maintained.

- Source: https://github.com/dialogflow/dialogflow-fulfillment-nodejs

- Documentation: https://blog.dialogflow.com/post/fulfillment-library-beta/

**[actions-on-google](https://www.npmjs.com/package/actions-on-google)** Use this ONLY if you're planning on building an agent that works with Google Assistant. actions-on-google has a slighlty different syntax than dialogflow-fulfillment and its rich components (cards, suggeestion chips, carousel, etc) will not render on any non-Google Assistant device/interface.

- Source: https://github.com/actions-on-google/actions-on-google-nodejs/tree/master/src/service/dialogflow

- Documentation: https://actions-on-google.github.io/actions-on-google-nodejs/2.12.0/index.html

- Documentation 2: https://developers.google.com/assistant/actions/reference/nodejsv2/overview

- Example (actions-on-google + dialogflow-fulfillment): https://github.com/dialogflow/fulfillment-actions-library-nodejs/blob/master/functions/index.js

- Rich media JSON payloads (actions-on-google only): https://github.com/dialogflow/fulfillment-webhook-json

## Official Samples

- All samples: https://github.com/dialogflow/resources

- DialogFlow "Quickstart" series: https://cloud.google.com/dialogflow/docs/quick/build-agent

- https://github.com/dialogflow/fulfillment-webhook-nodejs/blob/master/functions/index.js

- https://github.com/dialogflow/fulfillment-slot-filling-nodejs/blob/master/functions/index.js

- https://github.com/GoogleCloudPlatform/dialogflow-integrations

- https://cloud.google.com/dialogflow/docs/reference/rest/v2beta1-overview

## Great 3rd Party Resources

**Matt Carrol's writeups** (**[DialogFlow Fulfillment author](https://www.npmjs.com/package/dialogflow-fulfillment)**):

1. https://matthewayne.com/post/actions-on-google-v2-alpha-dialogflow-fullfillment-beta/

2. https://matthewayne.com/post/building-conversations/

**[Aravind Mohanoor](https://miningbusinessdata.com/)** has been writing about DialogFlow since its API.AI days

- https://miningbusinessdata.com/recommended-tools-and-services-for-dialogflow-bot-makers/

- https://miningbusinessdata.com/the-must-know-dialogflow-concepts/

- https://miningbusinessdata.com/reader-question-slot-filling-vs-follow-up-intents/

- https://miningbusinessdata.com/build-better-dialogflow-bots/

- https://miningbusinessdata.com/reader-question-will-followup-events-work-when-an-intent-has-an-input-context/

**[Kevin Dhir's](https://medium.com/@kevinkdhir)** DialogFlow basics talk + demo

- https://www.youtube.com/watch?v=DkZmVLHoCLo

**Romin Irani's** Google Assistant writeup:

- https://rominirani.com/hands-on-with-api-ai-google-assistant-writing-your-first-conversation-agent-a6a7dcdaba27

**[Deborah Kay's (@debbiediscovers)](https://twitter.com/debbiediscovers)** "knock-knock" joke series--clever use of intents. Other writing available **[here](https://chatbotslife.com/@debbiediscovers)**

- https://chatbotslife.com/how-to-handle-context-with-dialogflow-part-1-knock-knock-jokes-4659b346d83b

- https://chatbotslife.com/how-to-use-context-with-dialogflow-to-handle-errors-part-2-knock-knock-its-me-510c82840e6d

- https://chatbotslife.com/how-to-use-context-with-dialogflow-when-users-spoil-your-punchline-part-3-knock-knock-jokes-f4585179e47e

- https://chatbotslife.com/using-context-and-entities-in-dialogflow-to-respond-to-users-jokes-part-4-knock-knock-jokes-97b2727cfbad

**[Javier Martinez](http://jamarmu.es/)** **([@jamarmu_es](https://twitter.com/jamarmu_es))** 101 series on DialogFlow

- http://jamarmu.es/dialogflow-1-intro-to-the-platform/

- http://jamarmu.es/dialogflow-2-intents-and-conversation-flows/

- http://jamarmu.es/dialogflow-3-calling-a-fulfillment-to-process-information/

- http://jamarmu.es/dialogflow-4-using-entities-parameters-and-contexts/

- http://jamarmu.es/dialogflow-5-connecting-to-a-datastore-database/

- http://jamarmu.es/dialogflow-6-using-events-to-trigger-intents/

## End-to-End Articles

Good general end to end articles, some drift into actions-on-google specifics, but all very thorough & useful:

- Jenn Bailey **[@jenndotcodes](https://twitter.com/jenndotcodes)**: https://www.raywenderlich.com/4739762-building-an-action-for-google-assistant-getting-started

* Paul Lhussiez **[@Depado](https://github.com/Depado) || [depa.do](https://depa.do/)**: https://medium.com/leboncoin-engineering-blog/dialogflow-a-complete-guide-with-webhook-85b8456b4e1d

* **[Jana Bergant](https://www.youtube.com/channel/UCMQXvu8jhHNnJ2DxPLhaMuQ/videos)** (online store, DB connection, etc): https://chatbotslife.com/dialogflow-fulfillment-dynamic-responses-from-google-firestore-20acd19146ee

- Moses Sam Paul **[@mosessampaul](https://twitter.com/mosessampaul)** (stock Price): https://medium.com/swlh/how-to-build-a-chatbot-with-dialog-flow-chapter-4-external-api-for-fulfilment-3ab934fd7a00

- Jeff Delaaney **[@jeffdelaney23](https://twitter.com/jeffdelaney23)** (excellent documentation & video content): https://fireship.io/lessons/build-a-chatbot-with-dialogflow/

## Good issues & threads

Various educational threads & issues.

### Actions-on-google DialogFlow fulfillment

- Set platform "trick": https://github.com/dialogflow/dialogflow-fulfillment-nodejs/issues/149#issuecomment-590634801

- Sample code combining: https://github.com/dialogflow/fulfillment-actions-library-nodejs/blob/master/functions/index.js

- 100% actions-on-google Cloud Code sample (no dialogflow-fulfillment): https://github.com/actions-on-google/dialogflow-facts-about-google-nodejs/blob/master/functions/index.js

- https://stackoverflow.com/questions/48635067/send-back-rich-responses-to-actions-on-google-through-dialogflow-webhook-fulfill/48640297#48640297

### gRPC <> JSON

If you directly transact with the DialogFlow APIs, make sure to transform your data into a gRPC-compliant format (protobuff)

- JSON spec for API interactions: https://cloud.google.com/dialogflow/docs/reference/rest/v2/projects.agent.sessions/detectIntent

- Fix (author of DialogFlow Fulfillment): https://stackoverflow.com/a/47666256/3191929

* Protobuff utils: https://www.npmjs.com/package/pb-util

* Old commit converting JSON <> gRPC: https://github.com/googleapis/nodejs-dialogflow/blob/d907f3af57438c3e88c274b100eab520b5b51062/samples/structjson.js

* JSON <> gRPC: https://gist.github.com/matthewayne/e9dbd9a428420c3af399cb03d6b526b9

### Rich Response Payloads

## Displaying on web

- https://cloud.google.com/dialogflow/docs/integrations/web-demo

- https://github.com/mishushakov/dialogflow-web-v2
