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
        yield protractor_1.browser.sleep(5000);
        console.log("[1] Step to execute after URL Launch | Once Promise is resolved. ");
    });
});
cucumber_1.When('It will navigate to the Input Type Radio after scrolling', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.executeScript("window.scrollBy(0,4400)", "");
        console.log("[2] Scrolling done.");
    });
});
cucumber_1.When('Click on Try it Yourself button for radio', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.getWindowHandle().then(function (parentGUID) {
            return __awaiter(this, void 0, void 0, function* () {
                yield protractor_1.browser.sleep(3000);
                yield protractor_1.element(protractor_1.by.xpath("//*[@href='tryit.asp?filename=tryhtml_input_radio']")).click();
                protractor_1.browser.close();
                yield protractor_1.browser.getAllWindowHandles().then(function (allGUID) {
                    for (let guid of allGUID) {
                        if (guid != parentGUID) {
                            protractor_1.browser.switchTo().window(guid);
                            break;
                        }
                    }
                });
            });
        });
        console.log("[3] Try it Yourself button clicked.");
    });
});
cucumber_1.When('Select Male as radio input type', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.switchTo().frame(protractor_1.element(protractor_1.by.id("iframeResult")).getWebElement());
        yield protractor_1.browser.sleep(3000);
        yield protractor_1.element(protractor_1.by.id("female")).click();
        console.log("[4] Gender Selected.");
    });
});
cucumber_1.When('Click on Submit button for radio', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.xpath("//input[@value='Submit']")).submit();
        console.log("[5] Submit button clicked.");
        yield protractor_1.browser.sleep(3000);
    });
});
cucumber_1.Then('Your input is received for radio', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield console.log("[6] Input received");
        yield protractor_1.browser.sleep(3000);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRGdW5jdGlvbmFsaXR5UmFkaW8uc3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwc0RlZmluaXRpb24vZXZlbnRGdW5jdGlvbmFsaXR5UmFkaW8uc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBd0M7QUFDeEMsMkNBQW9FO0FBRXBFLGdCQUFLLENBQUMsNENBQTRDLEVBQUU7O1FBQ2xELE1BQU0sb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDBEQUEwRCxDQUFDLENBQUM7UUFDOUUsTUFBTSxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzNDLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtRUFBbUUsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSixlQUFJLENBQUMsMERBQTBELEVBQUU7O1FBQy9ELE1BQU0sb0JBQU8sQ0FBQyxhQUFhLENBQUMseUJBQXlCLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDM0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsMkNBQTJDLEVBQUU7O1FBQ2hELE1BQU0sb0JBQU8sQ0FBQyxlQUFlLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBZSxVQUFVOztnQkFDL0QsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekIsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMscURBQXFELENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUN2RixvQkFBTyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNqQixNQUFNLG9CQUFPLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxPQUFPO29CQUN4RCxLQUFJLElBQUksSUFBSSxJQUFJLE9BQU8sRUFBQzt3QkFDdkIsSUFBRyxJQUFJLElBQUcsVUFBVSxFQUFDOzRCQUNwQixvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDaEMsTUFBTTt5QkFDSjtxQkFDRjtnQkFDRixDQUFDLENBQUMsQ0FBQTtZQUNILENBQUM7U0FBQSxDQUFDLENBQUE7UUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxpQ0FBaUMsRUFBRTs7UUFDdEMsTUFBTSxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBQy9FLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDeEMsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxrQ0FBa0MsRUFBRTs7UUFDdEMsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzdELE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUMxQyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsa0NBQWtDLEVBQUU7O1FBQ3RDLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztDQUFBLENBQUMsQ0FBQyJ9