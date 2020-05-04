import {Given,When,Then, After, AfterAll, BeforeAll, Before} from 'cucumber'
import {browser,element,by,protractor} from 'protractor'
import { GetJson } from '../utility/utilities';

var jsonData;
var key1;
var key2;
var jsonst:string = '';
var featureName;
var scenarioName;
var firstValue;
var operatorString;
var secondValue;

BeforeAll(async function(){
  await browser.get('http://juliemr.github.io/protractor-demo/');
  let obj = new GetJson();
  jsonst = await obj.readJsonFile('../protractorCucumber/testingJson/tsScripts/testData/firstProtractor.json');
  jsonData = JSON.parse(jsonst);
});

Before((scenario) => {
  featureName = "FeatureCalculator";
  scenarioName = scenario.pickle.name;
  console.log(scenarioName);
  key1 = jsonData[featureName];
  key2 = key1[scenarioName];
});
 
Given('Super Calculator Website is opened browser', async function () {
  await console.log("[1] Step to execute after URL Launch | Once Promise is resolved. ");
});

When('Enter first number in First Box', async function () {
  firstValue = key2["firstNum"];
  await element(by.model('first')).sendKeys(firstValue).then(async function(){
    await browser.sleep(1000);
    await console.log("[2] Entered first number.");
   });
});

When('Select operator from dropdown', async  function () {
  let operatorCSS:string = "";
  operatorString = key2["Operator"];
    switch(operatorString){
      case "Multiply": operatorCSS = "option:nth-child(4)";
      break;
      case "Modulo": operatorCSS = "option:nth-child(3)";
      break;
      case "Divide": operatorCSS = "option:nth-child(2)";
      break;
    }
      await element(by.model('operator')).element(by.css(operatorCSS)).click().then(async function(){
          console.log("[3] Operator Selected");
      });
});

When('Enter second number in Second Box', async function () {
  secondValue = key2["secondNum"];
  await element(by.model('second')).sendKeys(secondValue).then(async function(){
    await browser.sleep(1000);
    console.log("[4] Entered second number.");
  });
});

When('Click Go button', async function () {
  await element(by.id('gobutton')).click().then(function(){
    console.log("[5] Go button clicked");
    });
});

Then('Answer is Displayed', async function (){
  await console.log("[6] Answer Displayed");
});