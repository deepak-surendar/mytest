var LoginPage = require('./page-objects/login-page');
var HomePage = require('./page-objects/home-page');
var expect = require('chai').expect;
const webdriver = require('selenium-webdriver');
const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

describe('login page', function () {

    var loginPage = new LoginPage(driver);
    var homePage;

    beforeEach(function () {
        loginPage.get();
        loginPage.OpenSignInMenu();
    });

    it('should sign in successfully', function (done) {
        loginPage.enterUserName();
        loginPage.enterPassword();
        loginPage.SignIn();

        homePage = new HomePage(driver);
        homePage.getHeader().then(function (value) {
            expect(value).to.equal('RSPbyCSA Portal Dashboard');
            done();
        });
    });

    afterEach(function () {
        loginPage.exit();
    });
});