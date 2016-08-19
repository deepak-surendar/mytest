var LoginPage = require('./page-objects/login-page');
var HomePage = require('./page-objects/home-page');
var expect = require('chai').expect;
var test = require('selenium-webdriver/testing');

test.describe('login page', function () {
   var loginPage = new LoginPage();
   var homePage;

   test.beforeEach(function () {
       loginPage.get();
       loginPage.OpenSignInMenu();
   });

   test.it('should sign in successfully', function () {
       loginPage.enterUserName();
       loginPage.enterPassword();
       loginPage.SignIn();

       homePage = new HomePage();
       homePage.getHeader().then(function (value) {
           expect(value).to.equal('RSPbyCSA Portal Dashboard');
       });

   });

   test.after(function () {
       loginPage.exit();
   });
});