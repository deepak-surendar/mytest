const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const until = webdriver.until;

var RspPage = function (driver) {

    var rspTypeSelect = By.name('rspType');
    var nameToAppear = By.id('field_name');
    var cancelButton = By.css('button[ui-sref="rsp.new.cancel"]');
    var cancelDialogText = By.className('modal-title');
    var cancelDialogYes = By.css('button[ng-click="vm.confirmCancel()"]');

    this.getHeader = function () {
        return driver.findElement(By.id('myRspLabel')).getText();
    };

    this.getH = function () {
        return By.id('myRspLabel');
    };

    this.selectRspType = function (typeValue) {
        var selectOpt = driver.findElement(rspTypeSelect);
        var desiredOpt;
        selectOpt.click();
        selectOpt.findElements(By.tagName('option')).then(function (elms) {
            elms.some(function (elm) {
                elm.getText().then(function (value) {
                    if (value === typeValue) {
                        desiredOpt = elm;
                        return true;
                    }
                });
            });
        }).then(function () {
            if (desiredOpt){
                return desiredOpt.click();
            }
        });
    };

    this.fillName = function (name) {
        driver.findElement(nameToAppear).sendKeys(name);
    };

    this.cancel = function () {
        driver.findElement(cancelButton).click();
    };

    this.getCancelDialogText = function () {
        return cancelDialogText;
    };

    this.cancelYes = function () {
        driver.findElement(cancelDialogYes).click();
    }
};

module.exports = RspPage;