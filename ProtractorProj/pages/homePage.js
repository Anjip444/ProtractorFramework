let homePage = function(){

    let firstNmbr = element(by.model('first'));
    let secondNumber = element(by.model('second'));
    let buttonToClick = element(by.css('[ng-click="doAddition()"]'));

    this.get = function (url) {
        browser.get(url);
    }

    this.enterFirstNumber = function(firstNo){
        firstNmbr.sendKeys(firstNo);
    };

    this.enterSecondNumber = function(secondNo){
        secondNumber.sendKeys(secondNo);
    };

    this.clickGo = function(){
        buttonToClick.click();
    };

    this.verifyResult = function(result){
        let output = element(by.cssContainingText('.ng-binding',result));
        expect(output.getText()).toEqual(result);

    }

};

module.exports = new homePage();