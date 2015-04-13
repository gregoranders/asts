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
      'PhantomJS'
    ],

    plugins: [
      'karma-systemjs',
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-traceur-preprocessor',
      'karma-junit-reporter',
      'karma-coverage-es6'

    ],

    reporters: ['progress', 'coverage'],


    logLevel: config.LOG_INFO,

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },

    coverageReporter: {
      type : 'html',
      dir : 'test_out/coverage/'
    },

    systemjs: {
      configFile: 'config.js',

      files: [
        'vendor/*/**/*.js',
        'application/*.js',
        'application/**/*.js'
      ],
      config: {
        baseURL: '/'
      }
    },

    singleRun: false,

    colors: true

  });
};
