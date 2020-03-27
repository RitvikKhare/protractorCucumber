import { browser, element, by} from 'protractor'
describe('Protractor Typescript Demo', function() {
	browser.ignoreSynchronization = true; // for non-angular websites
	browser.manage().window().maximize()
	it('Mouse Operations', function() {
		
		browser.get("https://chercher.tech/practice/drag-and-drop-example")

		// perform drag and drop
		browser.actions().dragAndDrop(
			element(by.id("div1")),
			element(by.id("div2"))
        ).perform();
        browser.sleep(8000);
	});
});