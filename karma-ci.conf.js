'use strict';

module.exports = function (config) {
  config.set({

    basePath: './build',

    files: [
    ],

    autoWatch: true,

    port: 9001,

    preprocessors: {
      'application/*.js': ['traceur'],
      'application/**/*.js': ['traceur'],
      'application/!(*spec).js': ['coverage'],
      'application/**/!(*spec).js': ['coverage']
    },

    frameworks: ['systemjs', 'jasmine', 'traceur'],

    browsers: [
      'Firefox'
    ],

    plugins: [
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-traceur-preprocessor',
      'karma-junit-reporter',
      'karma-coverage-es6',
      'karma-jspm'
    ],

    reporters: ['progress', 'coverage'],


    logLevel: config.LOG_INFO,

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },

    coverageReporter: {
      type: 'lcov',
      dir: 'test_out/'
    },

    jspm: {
      loadFiles: [
        'application/modules/**/*.spec.js'
      ],
      serveFiles: [
        'vendor/*.js',
        'vendor/**/*.js',
        'application/modules/*/**/!(*spec).js',
        'application/modules/*/!(*spec).js',
        'application/library/!(*spec).js'
      ],
      configFile: 'config.js',
      packages: 'vendor/'
    },

    singleRun: true,

    colors: true

  });
};
