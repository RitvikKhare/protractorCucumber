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
cucumber_1.Given('The website is opened for dropdown type', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.get('https://www.w3schools.com/tags/tag_select.asp');
        yield protractor_1.browser.manage().window().maximize();
        yield protractor_1.browser.sleep(2000);
        console.log("[1] Step to execute after URL Launch | Once Promise is resolved. ");
    });
});
cucumber_1.When('It will navigate to the example after scrolling', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.executeScript("window.scrollBy(0,150)", "");
        console.log("[2] Scrolling done.");
    });
});
cucumber_1.When('Click on Try it Yourself button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.getWindowHandle().then(function (parentGUID) {
            return __awaiter(this, void 0, void 0, function* () {
                yield protractor_1.browser.sleep(3000);
                yield protractor_1.element(protractor_1.by.xpath("//*[@href='tryit.asp?filename=tryhtml_select']")).click();
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
cucumber_1.Then('Choose a Audi from dropdown', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.switchTo().frame(protractor_1.element(protractor_1.by.id("iframeResult")).getWebElement());
        yield protractor_1.browser.sleep(3000);
        yield protractor_1.element(protractor_1.by.id("cars")).click();
        yield protractor_1.browser.sleep(1000);
        yield protractor_1.element(protractor_1.by.css("option:nth-child(4)")).click();
        yield protractor_1.browser.sleep(3000);
        yield console.log("[4] Option clicked from dropdown.");
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRGdW5jdGlvbmFsaXR5RHJvcGRvd24uc3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwc0RlZmluaXRpb24vZXZlbnRGdW5jdGlvbmFsaXR5RHJvcGRvd24uc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBd0M7QUFDeEMsMkNBQW9FO0FBRXBFLGdCQUFLLENBQUMseUNBQXlDLEVBQUU7O1FBQy9DLE1BQU0sb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLCtDQUErQyxDQUFDLENBQUM7UUFDbkUsTUFBTSxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzNDLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtRUFBbUUsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSixlQUFJLENBQUMsaURBQWlELEVBQUU7O1FBQ3RELE1BQU0sb0JBQU8sQ0FBQyxhQUFhLENBQUMsd0JBQXdCLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsaUNBQWlDLEVBQUU7O1FBQ3RDLE1BQU0sb0JBQU8sQ0FBQyxlQUFlLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBZSxVQUFVOztnQkFDL0QsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDMUIsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsZ0RBQWdELENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNsRixNQUFNLG9CQUFPLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxPQUFPO29CQUN4RCxLQUFJLElBQUksSUFBSSxJQUFJLE9BQU8sRUFBQzt3QkFDdkIsSUFBRyxJQUFJLElBQUcsVUFBVSxFQUFDOzRCQUNwQixvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDaEMsTUFBTTt5QkFDSjtxQkFDRjtnQkFDRixDQUFDLENBQUMsQ0FBQTtZQUNILENBQUM7U0FBQSxDQUFDLENBQUE7UUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyw2QkFBNkIsRUFBRTs7UUFDakMsTUFBTSxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBQy9FLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyQyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyRCxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO0lBQzFELENBQUM7Q0FBQSxDQUFDLENBQUMifQ==