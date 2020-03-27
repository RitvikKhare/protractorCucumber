import { browser, element, by, protractor} from 'protractor'
describe('Protractor Typescript Demo', function() {
    browser.ignoreSynchronization = true; // for non-angular websites
    browser.manage().window().maximize()
    it('Javascript executions', function() {
        
        // navigate to the url
        browser.get("https://chercher.tech/practice/popups");
        // click the element
        browser.executeScript("document.getElementsByName('alert')[0].click()")
        browser.sleep(6000);
    });
});
