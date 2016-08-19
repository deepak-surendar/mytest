const webdriver = require('selenium-webdriver');
const By = webdriver.By;

var LoginPage = function (driver) {

    var signInMenu = driver.findElement(By.id('login'));
    var userId = driver.findElement(By.id('username'));
    var password = driver.findElement(By.id('password'));
    var submitBtn = driver.findElement(By.css('button[type=submit]'));

    this.get = function () {
        driver.get('https://dev-rspcsa.slb.nbndc.local/rsp_by_csa/#/');
    };

    this.OpenSignInMenu = function () {
        signInMenu.click();
    };

    this.enterUserName = function () {
        userId.clear();
        userId.sendKeys('v-deepaksurendar');
    };

    this.enterPassword = function () {
        password.clear();
        password.sendKeys('siddhu123.');
    };

    this.SignIn = function () {
        submitBtn.click();
    };

    this.exit = function () {
        driver.quit();
    };

    this.give = function () {
        return true;
    };
};

module.exports = LoginPage;