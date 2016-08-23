const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const until = webdriver.until;

var HomePage = function (driver) {

    var addNewButton = By.css('button[ui-sref="rsp.new"]');

    this.getHeader = function () {
        return driver.findElement(By.id('PageTitle')).getText();
    };

    this.getH = function () {
        return By.id('PageTitle');
    };

    this.getAddRspButton = function () {
        return driver.findElement(addNewButton);
    };

    this.addRsp = function () {
        driver.findElement(addNewButton).click();
    };
};

module.exports = HomePage;