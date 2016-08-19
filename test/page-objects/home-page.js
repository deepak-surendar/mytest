var webdriver = require('selenium-webdriver');

var HomePage = function () {
    var By = webdriver.By,
        driver = new webdriver.Builder()
            .forBrowser('chrome')
            .build();

    this.getHeader = function () {
        var header = driver.findElement(By.id('PageTitle'));
        return header.getText();
    };

};

module.exports = HomePage;
