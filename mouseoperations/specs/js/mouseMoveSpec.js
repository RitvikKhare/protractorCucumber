"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe('Protractor Typescript Demo', function () {
    protractor_1.browser.ignoreSynchronization = true; // for non-angular websites
    protractor_1.browser.manage().window().maximize();
    it('Mouse Operations', function () {
        protractor_1.browser.get("https://chercher.tech/practice/popups");
        // mouse hover on a submenu
        protractor_1.browser.actions().mouseMove(protractor_1.element(protractor_1.by.id("sub-menu"))).perform();
        protractor_1.browser.sleep(6000);
    });
});
