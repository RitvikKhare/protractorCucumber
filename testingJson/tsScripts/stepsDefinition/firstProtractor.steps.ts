import {Given,When,Then, After, AfterAll, BeforeAll, Before} from 'cucumber'
import {browser,element,by,protractor} from 'protractor'
import { GetJson } from '../utility/utilities';

BeforeAll(async function(){
  await browser.get('http://juliemr.github.io/protractor-demo/');
});


Before(async function(){
  //var scenario1 = 'MultiplyScenario';
});

let obj = new GetJson();
var ab = obj.readJsonFile('../protractorCucumber/testingJson/tsScripts/testData/firstProtractor.json');

Given('Super Calculator Website is opened browser', async function () {
   	await console.log("[1] Step to execute after URL Launch | Once Promise is resolved. ");
 });

  When('Enter first number in First Box', async function () {
    await element(by.model('first')).sendKeys().then(async function(){
      
      browser.sleep(1000);
     await console.log("[2] Entered first number.");
   });
  });

  When('Select operator from dropdown', async  function () {
      await element(by.model('operator')).element(by.css("option:nth-child(4)")).click().then(async function(){
          console.log("[3] Operator Selected");
      });
    });

  When('Enter second number in Second Box', async function () {
    await element(by.model('second')).sendKeys().then(async function(){
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
