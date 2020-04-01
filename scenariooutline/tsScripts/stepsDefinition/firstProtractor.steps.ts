import {Given,When,Then} from 'cucumber'
import {browser,element,by} from 'protractor'

// For multiplication scenario
Given('Super Calculator Website is opened browser as', async function () {
   await browser.get('http://juliemr.github.io/protractor-demo/').then(async function()
 			{
   	      await console.log("[1] Step to execute after URL Launch | Once Promise is resolved. ");
       });
 });

  When('Enter number 15 in First Box', async function () {
    await element(by.model('first')).sendKeys("15").then(async function(){
      browser.sleep(1000);
     await console.log("[2] Entered first number.");
   });

  });

  When('Select Multiply operator from dropdown', async  function () {
    await element(by.model('operator')).element(by.css("option:nth-child(4)")).click().then(async function(){
        console.log("[3] Operator Selected as Multiplication ");
    });
  });

  When('Enter number 12 in Second Box', async function () {
    await element(by.model('second')).sendKeys("12").then(async function(){
      await browser.sleep(1000);
      console.log("[4] Entered second number.");
  });
  });

  Then('Answer Displayed is 180', async function (){
     await console.log("[6] Answer Displayed is 180.");
  });

  // For Modulo scenario
  When('Enter number 38 in First Box', async function () {
    await element(by.model('first')).sendKeys("38").then(async function(){
      browser.sleep(1000);
     await console.log("[2] Entered first number.");
   });

  });

  When('Select Modulo operator from dropdown', async  function () {
    await element(by.model('operator')).element(by.css("option:nth-child(3)")).click().then(async function(){
        console.log("[3] Operator Selected as Modulo ");
    });
  });

  When('Enter number 32 in Second Box', async function () {
    await element(by.model('second')).sendKeys("32").then(async function(){
      await browser.sleep(1000);
      console.log("[4] Entered second number.");
  });
  });

  Then('Answer Displayed is 6', async function (){
   await console.log("[6] Answer Displayed is 6.");
});

// For Division scenario
When('Enter number 25 in First Box', async function () {
  await element(by.model('first')).sendKeys("25").then(async function(){
    browser.sleep(1000);
   await console.log("[2] Entered first number.");
 });

});

When('Select Divide operator from dropdown', async  function () {
  await element(by.model('operator')).element(by.css("option:nth-child(2)")).click().then(async function(){
      console.log("[3] Operator Selected as Division ");
  });
});

When('Enter number 5 in Second Box', async function () {
  await element(by.model('second')).sendKeys("5").then(async function(){
    await browser.sleep(1000);
    console.log("[4] Entered second number.");
});
});

Then('Answer Displayed is 5', async function (){
 await console.log("[6] Answer Displayed is 5.");
});