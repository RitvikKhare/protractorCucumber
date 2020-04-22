"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
cucumber_1.Given('The website is opened for radio input type', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.get('https://www.w3schools.com/html/html_form_input_types.asp');
        yield protractor_1.browser.manage().window().maximize();
        protractor_1.browser.sleep(5000);
        console.log("[1] Step to execute after URL Launch | Once Promise is resolved. ");
    });
});
cucumber_1.When('It will navigate to the Input Type Radio after scrolling', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.executeScript("window.scrollBy(0,4400)", "");
        console.log("[2] Scrolling done.");
    });
});
cucumber_1.When('Click on Try it Yourself button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.sleep(3000);
        yield protractor_1.element(protractor_1.by.xpath("//*[@href='tryit.asp?filename=tryhtml_input_radio']")).click();
        protractor_1.browser.sleep(5000);
        console.log("[3] Try it Yourself button clicked.");
    });
});
cucumber_1.When('Select Male as radio input type', function () {
    return __awaiter(this, void 0, void 0, function* () {
        //await browser.switchTo().frame(element(by.id("iframeResult")).getWebElement());
        //await browser.driver.switchTo().frame(1);
        //await element(by.tagName('iframe')[1]);
        //await browser.executeScript("document.getElementsByTagName('iframe')[1].contentWindow");
        yield protractor_1.browser.switchTo().frame(protractor_1.element(protractor_1.by.xpath("//iframe[@id='iframeResult']")).getWebElement());
        //await element(by.id('male')).click();
        //await element(by.id('male')).isSelected();
        // await browser.executeScript("document.getElementById('male').click()");
        // await browser.executeScript("document.getElementsByName('gender')[0].click()");
        //await element(by.css("input[value='male']")).click();
        let radio = yield protractor_1.element(protractor_1.by.xpath("//input[@value='male']"));
        radio.isSelected().then(function (checked) {
            if (!checked) {
                radio.click();
            }
        });
        protractor_1.browser.sleep(3000);
        console.log("[4] Gender Selected.");
    });
});
cucumber_1.When('Click on Submit button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        //await element(by.css("input[value='Submit']")).submit();
        protractor_1.browser.sleep(3000);
        // await element(by.name('submit')).click().then(async function(){
        console.log("[5] Submit button clicked.");
        // browser.sleep(3000);
        //});
    });
});
cucumber_1.Then('Your input is received', function () {
    return __awaiter(this, void 0, void 0, function* () {
        //await browser.close();
        console.log("[6] Input received");
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRGdW5jdGlvbmFsaXR5UmFkaW8uc3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwc0RlZmluaXRpb24vZXZlbnRGdW5jdGlvbmFsaXR5UmFkaW8uc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNEU7QUFDNUUsMkNBQW9FO0FBRXBFLGdCQUFLLENBQUMsNENBQTRDLEVBQUU7O1FBQ2xELE1BQU0sb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDBEQUEwRCxDQUFDLENBQUM7UUFDOUUsTUFBTSxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzNDLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUVBQW1FLENBQUMsQ0FBQztJQUNwRixDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUYsZUFBSSxDQUFDLDBEQUEwRCxFQUFFOztRQUMvRCxNQUFNLG9CQUFPLENBQUMsYUFBYSxDQUFDLHlCQUF5QixFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzFELE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUN0QyxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLGlDQUFpQyxFQUFFOztRQUNwQyxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxxREFBcUQsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDNUYsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsaUNBQWlDLEVBQUU7O1FBRXRDLGlGQUFpRjtRQUNqRiwyQ0FBMkM7UUFDM0MseUNBQXlDO1FBQ3pDLDBGQUEwRjtRQUMxRixNQUFNLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztRQUVsRyx1Q0FBdUM7UUFDdkMsNENBQTRDO1FBQzVDLDBFQUEwRTtRQUMzRSxrRkFBa0Y7UUFDbEYsdURBQXVEO1FBQ3RELElBQUksS0FBSyxHQUFjLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztRQUN6RSxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsT0FBTztZQUN2QyxJQUFHLENBQUUsT0FBTyxFQUFDO2dCQUNkLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNYO1FBQ0YsQ0FBQyxDQUFDLENBQUE7UUFDSixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUMxQyxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUwsZUFBSSxDQUFDLHdCQUF3QixFQUFFOztRQUM5QiwwREFBMEQ7UUFDMUQsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsa0VBQWtFO1FBQy9ELE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUMzQyx1QkFBdUI7UUFDM0IsS0FBSztJQUNKLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsd0JBQXdCLEVBQUU7O1FBQzVCLHdCQUF3QjtRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDckMsQ0FBQztDQUFBLENBQUMsQ0FBQyJ9