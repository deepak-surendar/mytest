var LoginPage = require('./page-objects/login-page');
var HomePage = require('./page-objects/home-page');
var RspPage = require('./page-objects/rsp-page');
var expect = require('chai').expect;
const webdriver = require('selenium-webdriver');
const until = webdriver.until;
const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

describe('rsp page', function () {
    var loginPage = new LoginPage(driver);
    var homePage = new HomePage(driver);
    var rspPage = new RspPage(driver);

    before(function (done) {
        loginPage.get();
        loginPage.OpenSignInMenu();
        loginPage.enterUserName();
        loginPage.enterPassword();
        loginPage.SignIn();
        done();
    });

    it('should add new RSP', function (done) {
        driver.wait(until.elementLocated(homePage.getH()), 2000);
        homePage.addRsp();
        driver.wait(until.elementLocated(rspPage.getH()), 2000);
        rspPage.getHeader().then(function (value) {
            expect(value).to.equal('Create Retail Service Provider');
            done();
        });
    });

    afterEach(function () {
        driver.quit();
    });
});