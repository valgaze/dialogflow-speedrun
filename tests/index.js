var test = require('tape');
const util = require('../util');

test('util.sanitize', function (t) {
    const fixture = {
        "port": "3000",
        "webhook": "/chatbotendpoint",
    }
    const { sanitize } = util;
    t.deepEqual(sanitize(fixture), {port: '3000', webhook: '/chatbotendpoint'});

    const fixture2 = {
        "port": "3000",
        "webhook": "chatbotendpoint",
    }
    t.deepEqual(sanitize(fixture2), {port: '3000', webhook: '/chatbotendpoint'});

    const fixture3 = {
        "port": "3000",
        "webhook": "/chatbotendpoint/",
    }
    t.deepEqual(sanitize(fixture3), {port: '3000', webhook: '/chatbotendpoint'});

    const fixture4 = {
        "webhook":"/chatbotendpoint"
    }
    t.throws(() => sanitize(fixture4));

    const fixture5 = {
        "port":"3000"
    }
    t.throws(() => sanitize(fixture4));

    const fixture6 = {}
    t.throws(() => sanitize(fixture4));

    t.end();
});


// test('util.validateIntentList', function (t) {
//     const { validateIntentList } = util;
//     const fixture = [{name:'aa', handler: 'aa'}]
//     t.deepEqual(validateIntentList(fixture), {port: '3000', webhook: '/chatbotendpoint'});

//     const fixture2 = {
//         "port": "3000",
//         "webhook": "chatbotendpoint",
//     }
//     // t.deepEqual(sanitize(fixture2), {port: '3000', webhook: '/chatbotendpoint'});

//     // const fixture3 = {
//     //     "port": "3000",
//     //     "webhook": "/chatbotendpoint/",
//     // }
//     // t.deepEqual(sanitize(fixture3), {port: '3000', webhook: '/chatbotendpoint'});

//     // const fixture4 = {
//     //     "webhook":"/chatbotendpoint"
//     // }
//     // t.throws(() => sanitize(fixture4));

//     // const fixture5 = {
//     //     "port":"3000"
//     // }
//     // t.throws(() => sanitize(fixture4));

//     // const fixture6 = {}
//     // t.throws(() => sanitize(fixture4));

//     t.end();
// });