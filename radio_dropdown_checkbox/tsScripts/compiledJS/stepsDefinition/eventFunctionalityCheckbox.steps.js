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
cucumber_1.Given('The website is opened for checkbox input type', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.get('https://www.w3schools.com/html/html_form_input_types.asp');
        yield protractor_1.browser.manage().window().maximize();
        yield protractor_1.browser.sleep(2000);
        console.log("[1] Step to execute after URL Launch | Once Promise is resolved. ");
    });
});
cucumber_1.When('It will navigate to the Input Type Checkbox after scrolling', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.executeScript("window.scrollBy(0,5050)", "");
        console.log("[2] Scrolling done.");
    });
});
cucumber_1.When('Click on Try it Yourself button for checkbox', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.getWindowHandle().then(function (parentGUID) {
            return __awaiter(this, void 0, void 0, function* () {
                yield protractor_1.browser.sleep(3000);
                yield protractor_1.element(protractor_1.by.xpath("//*[@href='tryit.asp?filename=tryhtml_input_checkbox']")).click();
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
cucumber_1.When('Select I have a bike as checkbox input type', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.switchTo().frame(protractor_1.element(protractor_1.by.id("iframeResult")).getWebElement());
        yield protractor_1.browser.sleep(3000);
        yield protractor_1.element(protractor_1.by.id("vehicle1")).click();
        console.log("[4] Checkbox first Selected.");
    });
});
cucumber_1.When('Select I have a boat as checkbox input type', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.id("vehicle3")).click();
        console.log("[5] Checkbox second Selected.");
    });
});
cucumber_1.When('Click on Submit button for checkbox', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.xpath("//input[@value='Submit']")).submit();
        console.log("[6] Submit button clicked.");
        yield protractor_1.browser.sleep(3000);
    });
});
cucumber_1.Then('Your input is received for checkbox', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield console.log("[7] Input received");
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRGdW5jdGlvbmFsaXR5Q2hlY2tib3guc3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwc0RlZmluaXRpb24vZXZlbnRGdW5jdGlvbmFsaXR5Q2hlY2tib3guc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBd0M7QUFDeEMsMkNBQW9FO0FBRXBFLGdCQUFLLENBQUMsK0NBQStDLEVBQUU7O1FBQ3JELE1BQU0sb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDBEQUEwRCxDQUFDLENBQUM7UUFDOUUsTUFBTSxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzNDLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtRUFBbUUsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSixlQUFJLENBQUMsNkRBQTZELEVBQUU7O1FBQ2xFLE1BQU0sb0JBQU8sQ0FBQyxhQUFhLENBQUMseUJBQXlCLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDM0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsOENBQThDLEVBQUU7O1FBQ25ELE1BQU0sb0JBQU8sQ0FBQyxlQUFlLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBZSxVQUFVOztnQkFDL0QsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekIsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsd0RBQXdELENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUMxRixvQkFBTyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNqQixNQUFNLG9CQUFPLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxPQUFPO29CQUN4RCxLQUFJLElBQUksSUFBSSxJQUFJLE9BQU8sRUFBQzt3QkFDdkIsSUFBRyxJQUFJLElBQUcsVUFBVSxFQUFDOzRCQUNwQixvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDaEMsTUFBTTt5QkFDSjtxQkFDRjtnQkFDRixDQUFDLENBQUMsQ0FBQTtZQUNILENBQUM7U0FBQSxDQUFDLENBQUE7UUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyw2Q0FBNkMsRUFBRTs7UUFDbEQsTUFBTSxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBQy9FLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUM7SUFDaEQsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyw2Q0FBNkMsRUFBRTs7UUFDaEQsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUM7SUFDakQsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVMLGVBQUksQ0FBQyxxQ0FBcUMsRUFBRTs7UUFDekMsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzdELE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUMxQyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMscUNBQXFDLEVBQUU7O1FBQ3pDLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Q0FBQSxDQUFDLENBQUMifQ==