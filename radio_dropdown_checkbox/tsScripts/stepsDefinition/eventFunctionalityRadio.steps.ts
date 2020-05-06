import {Given,When,Then} from 'cucumber'
import {browser,element,by,protractor, WebElement} from 'protractor'

Given('The website is opened for radio input type', async function () {
  await browser.waitForAngularEnabled(false);
  await browser.get('https://www.w3schools.com/html/html_form_input_types.asp');
  await browser.manage().window().maximize();
  await browser.sleep(5000);
  console.log("[1] Step to execute after URL Launch | Once Promise is resolved. ");
 });

When('It will navigate to the Input Type Radio after scrolling', async function () {
  await browser.executeScript("window.scrollBy(0,4400)", "");
  console.log("[2] Scrolling done.");
});

When('Click on Try it Yourself button for radio', async function () {
  await browser.getWindowHandle().then(async function(parentGUID){
	await browser.sleep(3000);
  await element(by.xpath("//*[@href='tryit.asp?filename=tryhtml_input_radio']")).click();
  browser.close();
	await browser.getAllWindowHandles().then(function(allGUID){
		for(let guid of allGUID){
			if(guid !=parentGUID){	
				browser.switchTo().window(guid);
				break;
			  }
		 }
	 })
	})
    console.log("[3] Try it Yourself button clicked.");
});

When('Select Male as radio input type', async  function () {
  await browser.switchTo().frame(element(by.id("iframeResult")).getWebElement());
  await browser.sleep(3000);
  await element(by.id("female")).click();
    console.log("[4] Gender Selected.");
});
    
When('Click on Submit button for radio', async function () {
   await element(by.xpath("//input[@value='Submit']")).submit();
   console.log("[5] Submit button clicked.");
   await browser.sleep(3000);
});

Then('Your input is received for radio', async function (){
   await console.log("[6] Input received");
   await browser.sleep(3000);
});