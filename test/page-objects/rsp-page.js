const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const until = webdriver.until;

var RspPage = function (driver) {

    this.getHeader = function () {
        return driver.findElement(By.id('myRspLabel')).getText();
    };

    this.getH = function () {
        return By.id('myRspLabel');
    };
};

module.exports = RspPage;