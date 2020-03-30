let homepage = require('../pages/homePage');

describe('Demo Calculator tests', function () {

    it('first test', function () {
        browser.get('http://juliemr.github.io/protractor-demo/');
        browser.sleep(2000);
        homepage.enterFirstNumber('2');
        homepage.enterSecondNumber('3');
        homepage.clickGo();
        homepage.verifyResult('5');
    });


});