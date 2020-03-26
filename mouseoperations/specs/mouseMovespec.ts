import { browser, element, by} from 'protractor'
describe('Protractor Typescript Demo', function() {
	
	it('Mouse Operations', function() {
		browser.ignoreSynchronization = true; // for non-angular websites
	browser.manage().window().maximize()
		// set implicit time to 30 seconds
		browser.manage().timeouts().implicitlyWait(30000);

		browser.get("https://chercher.tech/practice/popups")
		// mouse hover on a submenu
		browser.actions().mouseMove(element(by.id("sub-menu"))).perform()
	});
});