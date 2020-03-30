"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe('Protractor Typescript Demo', function () {
    protractor_1.browser.ignoreSynchronization = true; // for non-angular websites
    protractor_1.browser.manage().window().maximize();
    it('Browser Window Operation', function () {
        // set implicit time to 30 seconds
        protractor_1.browser.manage().timeouts().implicitlyWait(30000);
        // navigate to the url
        protractor_1.browser.get("https://shubham007-developer-edition.ap15.force.com/resumeviewer/s/newcomponent");
        // get the Session id of the Parent
        protractor_1.browser.getWindowHandle().then(function (parentGUID) {
            protractor_1.browser.sleep(3000);
            // click the button to open new window
            protractor_1.element(protractor_1.by.id("mybutton")).click();
            protractor_1.browser.sleep(3000);
            // get the All the session id of the browsers
            protractor_1.browser.getAllWindowHandles().then(function (allGUID) {
                // iterate the values in the set
                for (let guid of allGUID) {
                    // once enter into if block if the GUID is not equal to parent window's GUID
                    if (guid != parentGUID) {
                        // switch to the guid
                        protractor_1.browser.switchTo().window(guid);
                        // break the loop
                        break;
                    }
                }
                // search on the google page
                protractor_1.element(protractor_1.by.name("q")).sendKeys("success");
                protractor_1.browser.sleep(3000);
                // close the browser
                protractor_1.browser.close();
                // switch back to the parent window
                protractor_1.browser.switchTo().window(parentGUID);
                protractor_1.browser.sleep(3000);
            });
        });
    });
});
