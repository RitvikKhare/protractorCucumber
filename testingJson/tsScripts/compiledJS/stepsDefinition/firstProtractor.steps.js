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
var jsonData;
var key1;
var key2;
var jsonst = '';
var featureName;
var scenarioName;
var firstValue;
var operatorString;
var secondValue;
cucumber_1.BeforeAll(function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
        let obj = new utilities_1.GetJson();
        jsonst = yield obj.readJsonFile('../protractorCucumber/testingJson/tsScripts/testData/firstProtractor.json');
        jsonData = JSON.parse(jsonst);
    });
});
cucumber_1.Before((scenario) => {
    featureName = "FeatureCalculator";
    scenarioName = scenario.pickle.name;
    console.log(scenarioName);
    key1 = jsonData[featureName];
    key2 = key1[scenarioName];
});
cucumber_1.Given('Super Calculator Website is opened browser', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield console.log("[1] Step to execute after URL Launch | Once Promise is resolved. ");
    });
});
cucumber_1.When('Enter first number in First Box', function () {
    return __awaiter(this, void 0, void 0, function* () {
        firstValue = key2["firstNum"];
        yield protractor_1.element(protractor_1.by.model('first')).sendKeys(firstValue).then(function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield protractor_1.browser.sleep(1000);
                yield console.log("[2] Entered first number.");
            });
        });
    });
});
cucumber_1.When('Select operator from dropdown', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let operatorCSS = "";
        operatorString = key2["Operator"];
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
cucumber_1.When('Enter second number in Second Box', function () {
    return __awaiter(this, void 0, void 0, function* () {
        secondValue = key2["secondNum"];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyc3RQcm90cmFjdG9yLnN0ZXBzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcHNEZWZpbml0aW9uL2ZpcnN0UHJvdHJhY3Rvci5zdGVwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVDQUE0RTtBQUM1RSwyQ0FBd0Q7QUFDeEQsb0RBQStDO0FBRS9DLElBQUksUUFBUSxDQUFDO0FBQ2IsSUFBSSxJQUFJLENBQUM7QUFDVCxJQUFJLElBQUksQ0FBQztBQUNULElBQUksTUFBTSxHQUFVLEVBQUUsQ0FBQztBQUN2QixJQUFJLFdBQVcsQ0FBQztBQUNoQixJQUFJLFlBQVksQ0FBQztBQUNqQixJQUFJLFVBQVUsQ0FBQztBQUNmLElBQUksY0FBYyxDQUFDO0FBQ25CLElBQUksV0FBVyxDQUFDO0FBRWhCLG9CQUFTLENBQUM7O1FBQ1IsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO1FBQy9ELElBQUksR0FBRyxHQUFHLElBQUksbUJBQU8sRUFBRSxDQUFDO1FBQ3hCLE1BQU0sR0FBRyxNQUFNLEdBQUcsQ0FBQyxZQUFZLENBQUMsMkVBQTJFLENBQUMsQ0FBQztRQUM3RyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsaUJBQU0sQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO0lBQ2xCLFdBQVcsR0FBRyxtQkFBbUIsQ0FBQztJQUNsQyxZQUFZLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMxQixJQUFJLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdCLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDNUIsQ0FBQyxDQUFDLENBQUM7QUFFSCxnQkFBSyxD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