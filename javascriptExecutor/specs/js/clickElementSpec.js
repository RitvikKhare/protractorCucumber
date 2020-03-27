"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe('Protractor Typescript Demo', function () {
    protractor_1.browser.ignoreSynchronization = true; // for non-angular websites
    protractor_1.browser.manage().window().maximize();
    it('Javascript executions', function () {
        // navigate to the url
        protractor_1.browser.get("https://chercher.tech/practice/popups");
        // click the element
        protractor_1.browser.executeScript("document.getElementsByName('alert')[0].click()");
        protractor_1.browser.sleep(6000);
    });
});
