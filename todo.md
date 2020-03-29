## Examples


* file upload (event + frontend, gRPC <> JSON)


* complex intent paths

* context from fulfillment

* "Open-ended" responses, capture user data, maybe system.any

https://stackoverflow.com/a/55237911

https://stackoverflow.com/questions/55228796/dialogflow-invoke-intent-without-training-phrases-and-saving-response

* giphy API or Twitter reaction

* multi-lingual-- rich responses flow in English + Chinese



## Topics

* gRPC <> JSON

* Cloud Code

```
Crash course

local testing-- build to cloud code, run emulator, take emulator URL for nGrok then use a "real" cloudcode for testing.

Good example why to test this way-- if wrapping in dialogflow-fulfillment, let conv = agent.conv() will null out without explicit platform specified
```

## Tooling

* Eject to cloud code, Express server, (hard one: wrap dialogflow-fulfillment)

* Sample cloudcode for dialogflow-fulfillment, AoG, combination (AoG intents need to be decorated somehow)

* "bot in box": 

## Frontend

* Custom components

* Zero-config frontend with Firebase hosting

* super simple UI & rich components, ex https://codepen.io/valgaze/pen/MWwLwpE

* pattern: seed conversation with initial data

