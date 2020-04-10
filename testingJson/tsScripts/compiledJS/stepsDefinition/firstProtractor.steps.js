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
cucumber_1.When('Select {word} operator from dropdown', function (operatorString) {
    return __awaiter(this, void 0, void 0, function* () {
        let operatorCSS = "";
        switch (operatorString) {
            case "Multiply":
                operatorCSS = "option:nth-child(4)";
                break;
            case "Modulo":
                operatorCSS = "option:nth-child(3)";
                break;
            case "Divide":
                operatorCSS = "option:nth-child(2)";
                break;
        }
        yield protractor_1.element(protractor_1.by.model('operator')).element(protractor_1.by.css(operatorCSS)).click().then(function () {
            return __awaiter(this, void 0, void 0, function* () {
                console.log("[3] Operator Selected");
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
        protractor_1.browser.sleep(2000);
        //browser.driver.executeScript("document.body.style.zoom='60%'");
        let screenShot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenShot, "image/png");
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyc3RQcm90cmFjdG9yLnN0ZXBzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcHNEZWZpbml0aW9uL2ZpcnN0UHJvdHJhY3Rvci5zdGVwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVDQUE0RTtBQUM1RSwyQ0FBd0Q7QUFFeEQsb0JBQVMsQ0FBQzs7UUFDUixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7SUFDakUsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILGdCQUFLLENBQUMsNENBQTRDLEVBQUU7O1FBQ2hELE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxtRUFBbUUsQ0FBQyxDQUFDO0lBQzFGLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFRixlQUFJLENBQUMsaUNBQWlDLEVBQUUsVUFBZ0IsUUFBUTs7UUFDOUQsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDOztnQkFDdkQsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3JCLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1lBQ2pELENBQUM7U0FBQSxDQUFDLENBQUM7SUFDSixDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHNDQUFzQyxFQUFFLFVBQWlCLGNBQWM7O1FBQzFFLElBQUksV0FBVyxHQUFVLEVBQUUsQ0FBQztRQUM1QixRQUFPLGNBQWMsRUFBQztZQUNwQixLQUFLLFVBQVU7Z0JBQUUsV0FBVyxHQUFHLHFCQUFxQixDQUFDO2dCQUNyRCxNQUFNO1lBQ04sS0FBSyxRQUFRO2dCQUFFLFdBQVcsR0FBRyxxQkFBcUIsQ0FBQztnQkFDbkQsTUFBTTtZQUNOLEtBQUssUUFBUTtnQkFBRSxXQUFXLEdBQUcscUJBQXFCLENBQUM7Z0JBQ25ELE1BQU07U0FDUDtRQUNDLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUM7O2dCQUMxRSxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7WUFDekMsQ0FBQztTQUFBLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFTCxlQUFJLENBQUMsa0NBQWtDLEVBQUUsVUFBZ0IsU0FBUzs7UUFDaEUsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDOztnQkFDekQsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1lBQzlDLENBQUM7U0FBQSxDQUFDLENBQUM7SUFDSCxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLGlCQUFpQixFQUFFOztRQUN0QixNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQztZQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDJCQUEyQixFQUFFLFVBQWdCLFNBQVM7O1FBQ3hELE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCxnQkFBSyxDQUFDOztRQUNKLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLGlFQUFpRTtRQUNqRSxJQUFJLFVBQVUsR0FBRSxNQUFNLG9CQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDdkMsQ0FBQztDQUFBLENBQUMsQ0FBQyJ9