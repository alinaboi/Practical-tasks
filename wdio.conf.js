const {
    json
} = require("stream/consumers");

exports.config = {

    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [],
    maxInstances: 10,

    capabilities: [{
        maxInstances: 1,
        //browserName: 'chrome',
        browserName: 'firefox',
        acceptInsecureCerts: true
    }],
    logLevel: 'info',
    bail: 0,
    before() {
        console.log(`The test is processed. Test to be executed: ` + JSON.stringify(this.specs));
    },
    beforeTest: function (test, context) {
        console.log(`Running test: ${test.title}`);
    },
    afterTest: function (test, context, {
        error,
        result,
        duration,
        passed,
        retries
    }) {
        console.log(`Test ${test.title} is ${passed ?'passed':'not passed'}. Number of retries: ${JSON.stringify(retries.attempts)}`);
    },
    baseUrl: 'http://localhost:8000',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['selenium-standalone'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

}