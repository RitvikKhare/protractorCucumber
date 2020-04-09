import {Given,When,Then, After, AfterAll, BeforeAll, Before} from 'cucumber'
import {browser,element,by,protractor} from 'protractor'

BeforeAll(async function(){
  await browser.get('http://juliemr.github.io/protractor-demo/');
});

Given('Super Calculator Website is opened browser', async function () {
   	await console.log("[1] Step to execute after URL Launch | Once Promise is resolved. ");
 });

  When('Enter number {int} in First Box', async function (firstNum) {
    await element(by.model('first')).sendKeys(firstNum).then(async function(){
      browser.sleep(1000);
     await console.log("[2] Entered first number.");
   });
  });

  When('Select {word} operator from dropdown', async  function (operatorString) {
    let operatorCSS:string = "";
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
  
  After(async function () {
    browser.sleep(2000);
    //browser.driver.executeScript("document.body.style.zoom='60%'");
    let screenShot= await browser.takeScreenshot();
    this.attach(screenShot, "image/png");  
  });





