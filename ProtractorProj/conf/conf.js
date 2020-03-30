// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  //capabilities: {
    //'browserName': 'chrome'
  //},

  multiCapabilities: [
    {
      browserName: 'chrome',
      shardTestFiles: true,
      maxInstances: 2,
      specs: ['../tests/calculator.js','../tests/calculator.js']
    },
    /**
     * for multiple browsers testing parallely
     */

    /*{
      browserName: 'chrome',
      shardTestFiles: true,
      maxInstances: 2,
      specs: ['../tests/calculator.js','../tests/calculator.js']
    }*/
],

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  //specs: ['../tests/calculator.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 50000
  }
};
