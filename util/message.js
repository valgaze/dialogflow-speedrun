// Messages for tunnel, server statuses
const nGrok_skip = (port) => `Listening on port ${port}


Note: This is the server only

If you are using nGrok in a separate process, see
http://localhost:4040 to inspect traffic

`;

const nGrokServer = ({url, webhook, port}) => `
>>  ${url}${webhook}

Use URL above as your DialogFlow fulfillment webhook (tunneling local port ${port})

Note: You can inspect/replay traffic requests on http://localhost:4040

`;

const nGrokOnly = ({url, webhook}) => `
>>  ${url}${webhook}
 
Use URL above as DialogFlow fulfillment webhook URL

Inspect/replay traffic requests on http://localhost:4040

Note: In another terminal, start the server with $ npm run server
or $ npm run server:dev for live code-reload
`;


module.exports = {
    messages: {
        nGrok_skip,
        nGrokServer,
        nGrokOnly,
    },
}