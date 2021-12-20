//import allureReporter from '@wdio/allure-reporter';

const allureReporter = require("@wdio/allure-reporter").default;

const {
    json
} = require("stream/consumers");

exports.config = {

    specs: [
        './test/specs/**/*.js'
    ],
    suites: {
        apiTests: [
            './test/specs/addingAddressApi.js',
            './test/specs/addingCardApi.js',
            './test/specs/addingFeedbackApi.js',
            './test/specs/negativeLoginApi.js',
            './test/specs/positiveLoginApi.js',
            './test/specs/registrationApi.js'
        ],
        positiveUiTests: [
            './test/specs/buyingLastItems.js',
            './test/specs/fullPurchaseFlow.js',
            './test/specs/leavingFeedback.js',
            './test/specs/navigateToMedia.js',
            './test/specs/positiveLogin.js',
            './test/specs/registrationTest.js',
            './test/specs/uploadProfileImage.js',
            './test/specs/updateUsername.js'
        ],
        negativeUiTests: [
            './test/specs/negativeAddingCard.js',
            './test/specs/negativeIncorrectAddress.js',
            './test/specs/negativeLogin.js',
            './test/specs/negativeMobileNumber.js',
            './test/specs/negativeRegistrationEmptyPassword.js',
            './test/specs/negativeRegistrationWrongEmail.js'
        ],
        regression: [
            './test/specs/addingAddressApi.js',
            './test/specs/addingCardApi.js',
            './test/specs/addingFeedbackApi.js',
            './test/specs/negativeLoginApi.js',
            './test/specs/positiveLoginApi.js',
            './test/specs/registrationApi.js',
            './test/specs/buyingLastItems.js',
            './test/specs/fullPurchaseFlow.js',
            './test/specs/leavingFeedback.js',
            './test/specs/navigateToMedia.js',
            './test/specs/positiveLogin.js',
            './test/specs/registrationTest.js',
            './test/specs/uploadProfileImage.js',
            './test/specs/updateUsername.js',
            './test/specs/negativeAddingCard.js',
            './test/specs/negativeIncorrectAddress.js',
            './test/specs/negativeLogin.js',
            './test/specs/negativeMobileNumber.js',
            './test/specs/negativeRegistrationEmptyPassword.js',
            './test/specs/negativeRegistrationWrongEmail.js'

        ],
        smoke: [
            './test/specs/fullPurchaseFlow.js',
            './test/specs/positiveLogin.js',
            './test/specs/negativeLogin.js'
        ]
    },
    exclude: [],
    maxInstances: 10,

    capabilities: [
        {
        maxInstances: 1,
        browserName: 'chrome',
        acceptInsecureCerts: true
    },
    {
        maxInstances: 1,
        browserName: 'firefox',
        acceptInsecureCerts: true
    }
],
    logLevel: 'info',
    bail: 0,
    before() {
        global.baseUrl = 'http://localhost:3000/';
        console.log(`The test is processed. Test to be executed: ` + JSON.stringify(this.specs));
    },
    beforeSession() {
        global.allure = allureReporter;
    },
    beforeTest: function (test, context) {
        console.log(`Running test: ${test.title}`);
    },
    afterTest: async function (test, context, {
        error,
        result,
        duration,
        passed,
        retries
    }) {
        if (!passed) {
            let screen = await browser.takeScreenshot();
            await allureReporter.addAttachment("MyScreenShot", Buffer.from(screen, "base64"), "image/png");
        }
        console.log(`Test ${test.title} is ${passed ?'passed':'not passed'}. Number of retries: ${JSON.stringify(retries.attempts)}`);
    },
    baseUrl: 'http://localhost:3000',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['selenium-standalone'],
    framework: 'mocha',
    reporters: ['spec', ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
    }]],
    mochaOpts: {
        ui: 'bdd',
        timeout: 120000
    },

}