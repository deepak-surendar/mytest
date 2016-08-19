const webdriver = require('selenium-webdriver');
const By = webdriver.By;

var HomePage = function (driver) {

    this.getHeader = function () {
        var header = driver.findElement(By.id('PageTitle'));
        return header.getText();
    };

};

module.exports = HomePage;