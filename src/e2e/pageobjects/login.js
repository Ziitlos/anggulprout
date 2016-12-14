module.exports = (function() {
    const port = process.env.PORT || 8080;
    var inputEmail = element.all(by.className('input--login')).get(0).element(by.tagName('input'));
    var loginButton = element(by.className('btn'));

    return {
        loginButton: () => loginButton,
        inputEmail: () => inputEmail,
        getUrl: () => `http://localhost:${port}/login`
    };
})();
