'use strict';
var conf = [];

if(process.env.TRAVIS){
    conf = [
        {
            'browserName': 'firefox'
        }
    ];
} else {
    conf = [
        {
            'browserName': 'chrome',
            'directConnect': true
        }
    ];
}

exports.config = {
    allScriptsTimeout: 11000,
    directConnect: false,

    specs: [
      './build/e2e-test/*.e2e.spec.js',
      './build/e2e-test/**/*.e2e.spec.js'
    ],

    multiCapabilities: conf,

    baseUrl: 'http://localhost:3000/',

    framework: 'jasmine2',

    jasmineNodeOpts: {
        isVerbose: true,
        showTiming: true,
        includeStackTrace: true,
        showColors: true,
        defaultTimeoutInterval: 30000
    }
};
