var loginPage = require('../pageobjects/login');


describe('login', function() {

    it('should login', function() {
        browser.get(loginPage.getUrl());
        loginPage.inputEmail().click()
            .then(() => loginPage.inputEmail().sendKeys('e2e@admin.ch')
                .then(() =>
                    loginPage.loginButton().click()
                        .then(() =>
                            browser.getCurrentUrl()
                                .then(url => expect(url).toEqual(loginPage.getUrl()))
                        )
                )
            );
    });
});
