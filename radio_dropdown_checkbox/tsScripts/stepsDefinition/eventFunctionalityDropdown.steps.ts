import {Given,When,Then} from 'cucumber'
import {browser,element,by,protractor, WebElement} from 'protractor'

Given('The website is opened for dropdown type', async function () {
  await browser.waitForAngularEnabled(false);
  await browser.get('https://www.w3schools.com/tags/tag_select.asp');
  await browser.manage().window().maximize();
  await browser.sleep(2000);
  console.log("[1] Step to execute after URL Launch | Once Promise is resolved. ");
 });

When('It will navigate to the example after scrolling', async function () {
  await browser.executeScript("window.scrollBy(0,150)", "");
  console.log("[2] Scrolling done.");
});

When('Click on Try it Yourself button', async function () {
  await browser.getWindowHandle().then(async function(parentGUID){
	await browser.sleep(3000);
	await element(by.xpath("//*[@href='tryit.asp?filename=tryhtml_select']")).click();
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

Then('Choose a Audi from dropdown', async function (){
   await browser.switchTo().frame(element(by.id("iframeResult")).getWebElement());
   await browser.sleep(3000);
   await element(by.id("cars")).click();
   await browser.sleep(1000);
   await element(by.css("option:nth-child(4)")).click();
   await browser.sleep(3000);
   await console.log("[4] Option clicked from dropdown.");
});