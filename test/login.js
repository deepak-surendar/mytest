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

    beforeEach(function () {
        loginPage.get();
        loginPage.OpenSignInMenu();
    });

    it('should sign in successfully', function (done) {
        loginPage.enterUserName();
        loginPage.enterPassword();
        loginPage.SignIn();

        driver.wait(until.elementLocated(homePage.getH()), 2000);
        homePage.getHeader().then(function (value) {
            expect(value).to.equal('RSPbyCSA Portal Dashboard');
            done();
        });
    });

    afterEach(function () {
        loginPage.exit();
    });
});