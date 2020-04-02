import {Given,When,Then} from 'cucumber'
import {browser,element,by} from 'protractor'

Given('Super Calculator Website is opened browser as', async function () {
   await browser.get('http://juliemr.github.io/protractor-demo/').then(async function()
 			{
   	     await console.log("[1] Step to execute after URL Launch | Once Promise is resolved. ");
       });
 });

  When('Enter number {int} in First Box', async function (firstNum) {
    await element(by.model('first')).sendKeys(firstNum).then(async function(){
      browser.sleep(1000);
     await console.log("[2] Entered first number.");
   });

  });

  When('Enter number {int} in Second Box', async function (secondNum) {
    await element(by.model('second')).sendKeys(secondNum).then(async function(){
      await browser.sleep(1000);
      console.log("[4] Entered second number.");
  });
  });

  When('Click Go button', async function () {
    await element(by.id('gobutton')).click().then(function(){
      console.log("[5] Go button clicked");
      });
  });

  Then('Answer Displayed is {int}', async function (answerNum){
     await console.log("[6] Answer Displayed");
  });
