var LoginPage = require('./page-objects/login-page');
var HomePage = require('./page-objects/home-page');
var expect = require('chai').expect;
const webdriver = require('selenium-webdriver');
const until = webdriver.until;
const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

describe('home page', function () {
    var loginPage = new LoginPage(driver);
    var homePage = new HomePage(driver);

    before(function () {
        loginPage.get();
        loginPage.OpenSignInMenu();
        loginPage.enterUserName('v-deepaksurendar');
        loginPage.enterPassword('siddhu123.');
        return loginPage.SignIn();
    });

    it('should display create RSP button', function (done) {
        driver.wait(until.elementLocated(homePage.getH()), 2000);
        homePage.getAddRspButton().getText().then(function (value) {
            expect(value).to.equal('Create new RSP');
            done();
        });
    });

    after(function () {
        return driver.quit();
    });
});