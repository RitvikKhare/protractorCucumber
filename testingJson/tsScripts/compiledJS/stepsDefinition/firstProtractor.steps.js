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
const utilities_1 = require("../utility/utilities");
var scenario1, scenario2, scenario3;
var firstValue, secondValue, answerValue;
var i = 0;
// var item=0;
cucumber_1.BeforeAll(function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
    });
});
cucumber_1.Before(function () {
    return __awaiter(this, void 0, void 0, function* () {
        let obj = new utilities_1.GetJson();
        var jsonst = yield obj.readJsonFile('../protractorCucumber/testingJson/tsScripts/testData/firstProtractor.json');
        let cd = JSON.parse(jsonst);
        scenario1 = cd.FeatureCalculator.MultiplyScenario;
        scenario2 = cd.FeatureCalculator.ModuloScenario;
        scenario3 = cd.FeatureCalculator.DivideScenario;
        let scenarios = [scenario1, scenario2, scenario3];
        for (let item of scenarios) {
            console.log("firstValue = " + item.firstNum);
            console.log("secondValue = " + item.secondNum);
            console.log("answerValue = " + item.answerNum);
            //console.log("firstValue = " + scenarios[item].firstNum);
            //console.log("secondValue = " + scenarios[item].secondNum);
            //console.log("answerValue = " + scenarios[item].answerNum);
            item++;
            break;
        }
    });
});
cucumber_1.Given('Super Calculator Website is opened browser', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield console.log("[1] Step to execute after URL Launch | Once Promise is resolved. ");
    });
});
cucumber_1.When('Enter first number in First Box', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.model('first')).sendKeys(firstValue).then(function () {
            return __awaiter(this, void 0, void 0, function* () {
                protractor_1.browser.sleep(1000);
                yield console.log("[2] Entered first number.");
            });
        });
    });
});
cucumber_1.When('Select operator from dropdown', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.model('operator')).element(protractor_1.by.css("option:nth-child(4)")).click().then(function () {
            return __awaiter(this, void 0, void 0, function* () {
                console.log("[3] Operator Selected");
            });
        });
    });
});
cucumber_1.When('Enter second number in Second Box', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.model('second')).sendKeys(secondValue).then(function () {
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
cucumber_1.Then('Answer is Displayed', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield console.log("[6] Answer Displayed");
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyc3RQcm90cmFjdG9yLnN0ZXBzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcHNEZWZpbml0aW9uL2ZpcnN0UHJvdHJhY3Rvci5zdGVwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVDQUE0RTtBQUM1RSwyQ0FBd0Q7QUFDeEQsb0RBQStDO0FBRS9DLElBQUksU0FBUyxFQUFDLFNBQVMsRUFBQyxTQUFTLENBQUM7QUFDbEMsSUFBSSxVQUFVLEVBQUMsV0FBVyxFQUFDLFdBQVcsQ0FBQztBQUN2QyxJQUFJLENBQUMsR0FBQyxDQUFDLENBQUM7QUFDUixjQUFjO0FBRWQsb0JBQVMsQ0FBQzs7UUFDUixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7SUFDakUsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILGlCQUFNLENBQUM7O1FBQ0wsSUFBSSxHQUFHLEdBQUcsSUFBSSxtQkFBTyxFQUFFLENBQUM7UUFDeEIsSUFBSSxNQUFNLEdBQVUsTUFBTSxHQUFHLENBQUMsWUFBWSxDQUFDLDJFQUEyRSxDQUFDLENBQUM7UUFDeEgsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUU1QixTQUFTLEdBQUcsRUFBRSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDO1FBQ2xELFNBQVMsR0FBRyxFQUFFLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDO1FBQ2hELFNBQVMsR0FBRyxFQUFFLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDO1FBRWxELElBQUksU0FBUyxHQUFHLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUVsRCxLQUFLLElBQUksSUFBSSxJQUFJLFNBQVMsRUFBRTtZQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDL0MsMERBQTBEO1lBQzFELDREQUE0RDtZQUM1RCw0REFBNEQ7WUFDNUQsSUFBSSxFQUFFLENBQUM7WUFDUCxNQUFNO1NBQ1A7SUFDRCxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsZ0JBQUssQ0FBQyw0Q0FBNEMsRUFBRTs7UUFDaEQsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLG1FQUFtRSxDQUFDLENBQUM7SUFDMUYsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVGLGVBQUksQ0FBQyxpQ0FBaUMsRUFBRTs7UUFDdEMsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDOztnQkFDekQsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3JCLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1lBQ2pELENBQUM7U0FBQSxDQUFDLENBQUM7SUFDSixDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLCtCQUErQixFQUFFOztRQUNsQyxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUM7O2dCQUNwRixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7WUFDekMsQ0FBQztTQUFBLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFTCxlQUFJLENBQUMsbUNBQW1DLEVBQUU7O1FBQ3hDLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQzs7Z0JBQzNELE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztZQUM5QyxDQUFDO1NBQUEsQ0FBQyxDQUFDO0lBQ0gsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxpQkFBaUIsRUFBRTs7UUFDdEIsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxxQkFBcUIsRUFBRTs7UUFDekIsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDN0MsQ0FBQztDQUFBLENBQUMsQ0FBQyJ9