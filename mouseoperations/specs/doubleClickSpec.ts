import { browser, element, by} from 'protractor'
describe('Protractor Typescript Demo', function() {
	browser.ignoreSynchronization = true; // for non-angular websites
	browser.manage().window().maximize()
	it('Mouse Operations', function() {

		browser.get("https://chercher.tech/practice/popups")

		// double click the double click  button
        browser.actions().doubleClick(element(by.id("double-click"))).perform();
        browser.sleep(6000);
	});
});