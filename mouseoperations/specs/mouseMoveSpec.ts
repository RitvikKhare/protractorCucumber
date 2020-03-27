import { browser, element, by} from 'protractor'
describe('Protractor Typescript Demo', function() {
	browser.ignoreSynchronization = true; // for non-angular websites
    browser.manage().window().maximize()
	it('Mouse Operations', function() {
		
		browser.get("https://chercher.tech/practice/popups")

		// mouse hover on a submenu
		browser.actions().mouseMove(element(by.id("sub-menu"))).perform()
		browser.sleep(6000);
	});
});