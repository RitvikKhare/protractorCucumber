import {Given,When,Then} from 'cucumber'
import {browser,element,by} from 'protractor'

  Given('Super Calculator Website is opened browser', async function () {
   // await browser.get('http://juliemr.github.io/protractor-demo/').then(async function()
	//			{
		//	      await console.log("[1] Step to execute after URL Launch | Once Promise is resolved. ");
				//});
  });

  When('Click Go button', async function () {
    await element(by.id('gobutton')).click().then(function(){
      console.log("[5] Go button clicked");
      });
  });