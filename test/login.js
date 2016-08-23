var LoginPage = require('./page-objects/login-page');
var HomePage = require('./page-objects/home-page');
var expect = require('chai').expect;
const webdriver = require('selenium-webdriver');
const until = webdriver.until;
const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

describe('login page', function () {

    var loginPage = new LoginPage(driver);
    var homePage = new HomePage(driver);

    before(function () {
        loginPage.get();
        return loginPage.OpenSignInMenu();
    });

    it('should fail signin', function (done) {
        loginPage.enterUserName('foo');
        loginPage.enterPassword('foo');
        loginPage.SignIn();

        driver.wait(until.elementLocated(loginPage.getE()), 2000);
        loginPage.getError().getText().then(function (value) {
            expect(value).to.equal('Failed to sign in! Please check your credentials and try again.');
            done();
        });
    });

    it('should sign in successfully', function (done) {
        loginPage.enterUserName('v-deepaksurendar');
        loginPage.enterPassword('siddhu123.');
        loginPage.SignIn();

        driver.wait(until.elementLocated(homePage.getH()), 2000);
        homePage.getHeader().then(function (value) {
            expect(value).to.equal('RSPbyCSA Portal Dashboard');
            done();
        });
    });

    after(function () {
        return driver.quit();
    });
});