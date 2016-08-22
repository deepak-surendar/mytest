const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const until = webdriver.until;

var HomePage = function (driver) {

    this.getHeader = function () {
        return driver.findElement(By.id('PageTitle')).getText();
    };

    this.getH = function () {
        return By.id('PageTitle');
    };

    this.getAddRspButton = function () {
        return driver.findElement(By.css('button[ui-sref="rsp.new"]'));
    };

    this.addRsp = function () {
        driver.findElement(By.css('button[ui-sref="rsp.new"]')).click();
    };
};

module.exports = HomePage;