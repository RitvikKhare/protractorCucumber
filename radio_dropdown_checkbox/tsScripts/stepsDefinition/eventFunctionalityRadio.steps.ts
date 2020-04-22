import {Given,When,Then, After, AfterAll, BeforeAll, Before} from 'cucumber'
import {browser,element,by,protractor, WebElement} from 'protractor'

Given('The website is opened for radio input type', async function () {
  await browser.waitForAngularEnabled(false);
  await browser.get('https://www.w3schools.com/html/html_form_input_types.asp');
  await browser.manage().window().maximize();
  browser.sleep(5000);
   	console.log("[1] Step to execute after URL Launch | Once Promise is resolved. ");
 });

  When('It will navigate to the Input Type Radio after scrolling', async function () {
    await browser.executeScript("window.scrollBy(0,4400)", "");
     console.log("[2] Scrolling done.");
  });

  When('Click on Try it Yourself button', async function () {
      browser.sleep(3000);
        await element(by.xpath("//*[@href='tryit.asp?filename=tryhtml_input_radio']")).click();
			browser.sleep(5000);
      console.log("[3] Try it Yourself button clicked.");
  });

  When('Select Male as radio input type', async  function () {

    //await browser.switchTo().frame(element(by.id("iframeResult")).getWebElement());
    //await browser.driver.switchTo().frame(1);
    //await element(by.tagName('iframe')[1]);
    //await browser.executeScript("document.getElementsByTagName('iframe')[1].contentWindow");
    await browser.switchTo().frame(element(by.xpath("//iframe[@id='iframeResult']")).getWebElement());

    //await element(by.id('male')).click();
    //await element(by.id('male')).isSelected();
    // await browser.executeScript("document.getElementById('male').click()");
   // await browser.executeScript("document.getElementsByName('gender')[0].click()");
   //await element(by.css("input[value='male']")).click();
    let radio:WebElement = await element(by.xpath("//input[@value='male']"));
    radio.isSelected().then(function(checked){
	    if(! checked){
		  radio.click();
	     }
     })
   browser.sleep(3000);
          console.log("[4] Gender Selected.");
    });
    
  When('Click on Submit button', async function () {
   //await element(by.css("input[value='Submit']")).submit();
   browser.sleep(3000);
   // await element(by.name('submit')).click().then(async function(){
      console.log("[5] Submit button clicked.");
     // browser.sleep(3000);
 //});
  });

  Then('Your input is received', async function (){
     //await browser.close();
     console.log("[6] Input received");
  });




