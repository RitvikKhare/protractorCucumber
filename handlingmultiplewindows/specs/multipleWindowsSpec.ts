import { browser, element, by, protractor} from 'protractor'
describe('Protractor Typescript Demo', function() {
    browser.ignoreSynchronization = true; // for non-angular websites
    browser.manage().window().maximize();
	it('Browser Window Operation', function() {
		// set implicit time to 30 seconds
		browser.manage().timeouts().implicitlyWait(30000);
		// navigate to the url
		browser.get("https://shubham007-developer-edition.ap15.force.com/resumeviewer/s/newcomponent");
		// get the Session id of the Parent
		browser.getWindowHandle().then(function(parentGUID){
			browser.sleep(3000);
			// click the button to open new window
			element(by.id("mybutton")).click();
			browser.sleep(3000);
			// get the All the session id of the browsers
			browser.getAllWindowHandles().then(function(allGUID){
				// iterate the values in the set
				for(let guid of allGUID){
					// once enter into if block if the GUID is not equal to parent window's GUID
					if(guid !=parentGUID){
						// switch to the guid
						browser.switchTo().window(guid);
						// break the loop
						break;
					}
				}
				// search on the google page
				element(by.name("q")).sendKeys("success");
				browser.sleep(3000);
				// close the browser
				browser.close();
				// switch back to the parent window
                browser.switchTo().window(parentGUID);
                browser.sleep(3000);
			})
		})
	});
});