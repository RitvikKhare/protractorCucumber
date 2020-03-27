import { browser, element, by} from 'protractor'
describe('Protractor Typescript Demo', function() {
	browser.ignoreSynchronization = true; // for non-angular websites
	browser.manage().window().maximize()
	it('Mouse Operations', function() {
		
		browser.get("https://chercher.tech/practice/popups")

		// click the alert button
        browser.actions().click(element(by.name("alert"))).perform()
        browser.sleep(6000);
	});
});