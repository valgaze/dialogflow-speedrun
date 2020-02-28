## DialogFlow-Speedrun

```
"I don't wanna read docs, I wanna make bots!"
    ~ Target attention span of DialogFlow Speedrun
```

-----

**Note:** For the very impatient, go here: **[quickstart.md](./docs/quickstart.md)**

------

## What's a "Speedrun"?

A speedrun is essentially a race through a videogame as quickly as possible discarding or avoiding every non-essential activity along the way to save on time. This is repo is kind of the same thing-- it should help accelerate getting you to the "end." 

[![speedrun](./assets/yt_thumbnail_play.png)](http://www.youtube.com/watch?v=tmnMq2Hw72w "Speed Run")

## What's the "end"?

The goal here is to help *smooth* the initial learning curve and to encourage learning by doing. The "end" probably means you can implement complex conversations involving DialogFlow's *"fulfillment"* webhook if you need it. This repo takes care of a lot of setup chores and anything else you'll figure out along the way.

## What's "fulfillment"?

In DialogFlow fulfillment is what makes it an "intelligent agent" instead of a mere lowly "chatbot." After DialogFlow detects an intent from a user's input text, if fulfillment is enabled for that intent, DialogFlow will dispatch a request to your "webhook" along with a bunch of contextual information you can use to return a response to the user. After you're up and running with the basics, working with fulfillment can be both very fun and powerful.

## Examples

See the **[examples directory](./examples)** for some sample scenarios and associated fulfillment code (and **[the "Running the Examples" guide](./docs/running_the_examples.md)** for how to activate it.)

Also check out the **[docs](./docs/README.md)** directory for learning resources like a **[glossary](./docs/glossary.md)** and a **[listing of helpful resources](./docs/resources.md)**


## Tests

Run tests with:

```sh
npm test
```

**Note:** This tool is not affiliated with or any way involved with DialogFlow, Alphabet, etc



What does DialogFlow Speedrun do for you?

- Dead-simple to do local development of fulfillment webhooks (just ```npm start```)
- Single-command starter fulfillment with port tunneling 
- Montior (& replay!) requests on ```localhost:4040```
- Set up port tunneling with single command
- Provides learner-friendly dialog-flow fulfillment examples (which render in DialogFlow's simulator)
- Provides you with a healthcheck starter intent to help sanity-check debugging
