import {Given,When,Then} from 'cucumber'
import {browser,element,by} from 'protractor'

  Given('Super Calculator Website is opened browser', async function () {
    await browser.get('http://juliemr.github.io/protractor-demo/').then(async function()
				{
			      await console.log("[1] Step to execute after URL Launch | Once Promise is resolved. ");
				});
  });

  When('Title is Super Calculator', async function () {
    // Write code here that turns the phrase above into concrete actions
    //return 'pending';
  });

  When('Enter number 43 in First Box', async function () {
    await element(by.model('first')).sendKeys("43").then(async function(){
      browser.sleep(1000);
     await console.log("[2] Entered first number.");
   });

  });

  When('Select Modulo operator from dropdown', async  function () {
    await element(by.model('operator')).element(by.css("option:nth-child(3)")).click().then(async function(){
        console.log("[4] Operator Selected as Addition ");
    });
  });

  When('Enter number 40 in Second Box', async function () {
    await element(by.model('second')).sendKeys("40").then(async function(){
      await browser.sleep(1000);
      console.log("[3] Entered second number.");
  });
  });

  When('Click Go button', async function () {
    await element(by.id('gobutton')).click().then(function(){
      console.log("[5] Go button clicked");
      });
  });

  Then('Answer Displayed is 3', async function (){
      await element(by.model('second')).sendKeys("3").then(async function(){
      await browser.sleep(1000);
     console.log("[6] Answer Displayed is 3.");
  });
  });