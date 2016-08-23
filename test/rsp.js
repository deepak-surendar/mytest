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
        loginPage.enterUserName('v-deepaksurendar');
        loginPage.enterPassword('siddhu123.');
        loginPage.SignIn();
        return done();
    });

    it('should display header in Add new RSP page', function (done) {
        driver.wait(until.elementLocated(homePage.getH()), 2000);
        homePage.addRsp();
        driver.wait(until.elementLocated(rspPage.getH()), 2000);
        rspPage.getHeader().then(function (value) {
            expect(value).to.equal('Create Retail Service Provider');
            done();
        });
    });

    it('should be able to create new RSP', function (done) {
        //driver.wait(until.elementLocated(homePage.getH()), 2000);
        //homePage.addRsp();
        driver.wait(until.elementLocated(rspPage.getH()), 2000);
        rspPage.selectRspType('RESELLER');
        rspPage.fillName('testRSP');
        rspPage.cancel();
        driver.wait(until.elementLocated(rspPage.getCancelDialogText()), 2000);
        rspPage.cancelYes();
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