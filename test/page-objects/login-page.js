const webdriver = require('selenium-webdriver');
const By = webdriver.By;

var LoginPage = function (driver) {

    var signInMenu = driver.findElement(By.id('login'));
    var userId = driver.findElement(By.id('username'));
    var password = driver.findElement(By.id('password'));
    var submitBtn = driver.findElement(By.css('button[type=submit]'));

    // var alertDanger = By.css('.alert-danger');
    var alertDanger = By.css('div[class="alert alert-danger"]');

    this.get = function () {
        driver.get('https://ci-rspcsa.slb.nbndc.local/rsp_by_csa/#/');
    };

    this.OpenSignInMenu = function () {
        signInMenu.click();
    };

    this.enterUserName = function (username) {
        userId.clear();
        userId.sendKeys(username);
    };

    this.enterPassword = function (pwd) {
        password.clear();
        password.sendKeys(pwd);
    };

    this.SignIn = function () {
        submitBtn.click();
    };

    this.exit = function () {
        driver.quit();
    };

    this.getError = function () {
        return driver.findElement(alertDanger);
    };

    this.getE = function () {
        return alertDanger;
    };
};

module.exports = LoginPage;