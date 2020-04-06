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
cucumber_1.BeforeAll(function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
    });
});
cucumber_1.Given('Super Calculator Website is opened browser', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield console.log("[1] Step to execute after URL Launch | Once Promise is resolved. ");
    });
});
cucumber_1.When('Enter number {int} in First Box', function (firstNum) {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.model('first')).sendKeys(firstNum).then(function () {
            return __awaiter(this, void 0, void 0, function* () {
                protractor_1.browser.sleep(1000);
                yield console.log("[2] Entered first number.");
            });
        });
    });
});
cucumber_1.When('Enter number {int} in Second Box', function (secondNum) {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.model('second')).sendKeys(secondNum).then(function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield protractor_1.browser.sleep(1000);
                console.log("[4] Entered second number.");
            });
        });
    });
});
cucumber_1.When('Click Go button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.id('gobutton')).click().then(function () {
            console.log("[5] Go button clicked");
        });
    });
});
cucumber_1.Then('Answer Displayed is {int}', function (answerNum) {
    return __awaiter(this, void 0, void 0, function* () {
        yield console.log("[6] Answer Displayed");
    });
});
cucumber_1.After(function () {
    return __awaiter(this, void 0, void 0, function* () {
        let screenShot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenShot, "image/png");
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyc3RQcm90cmFjdG9yLnN0ZXBzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcHNEZWZpbml0aW9uL2ZpcnN0UHJvdHJhY3Rvci5zdGVwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVDQUE0RTtBQUM1RSwyQ0FBNkM7QUFFN0Msb0JBQVMsQ0FBQzs7UUFDUixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7SUFDakUsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILGdCQUFLLENBQUMsNENBQTRDLEVBQUU7O1FBQ2hELE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxtRUFBbUUsQ0FBQyxDQUFDO0lBQzFGLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFRixlQUFJLENBQUMsaUNBQWlDLEVBQUUsVUFBZ0IsUUFBUTs7UUFDOUQsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDOztnQkFDdkQsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3JCLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1lBQ2pELENBQUM7U0FBQSxDQUFDLENBQUM7SUFDSixDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLGtDQUFrQyxFQUFFLFVBQWdCLFNBQVM7O1FBQ2hFLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQzs7Z0JBQ3pELE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztZQUM5QyxDQUFDO1NBQUEsQ0FBQyxDQUFDO0lBQ0gsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxpQkFBaUIsRUFBRTs7UUFDdEIsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQywyQkFBMkIsRUFBRSxVQUFnQixTQUFTOztRQUN4RCxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsZ0JBQUssQ0FBQzs7UUFDQSxJQUFJLFVBQVUsR0FBRSxNQUFNLG9CQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDN0MsQ0FBQztDQUFBLENBQUMsQ0FBQyJ9