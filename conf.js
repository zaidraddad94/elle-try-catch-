let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
  framework: 'jasmine',
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ["--headless",  "--disable-gpu", "--window-size=800,600"]
    }
  },
  specs: ['spec.js'],
  baseUrl: 'https://www.elle.com/',
  onPrepare: function () {
    browser.ignoreSynchronization = true;
    jasmine.getEnv().addReporter(new SpecReporter({
      suite: {
        displayNumber: true,
      },
    }));
  }
};

