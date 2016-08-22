const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const until = webdriver.until;

var HomePage = function (driver) {

    this.getHeader = function () {
        driver.wait(until.elementLocated(By.id('PageTitle')), 3000);
        return driver.findElement(By.id('PageTitle')).getText();
    };

};

module.exports = HomePage;