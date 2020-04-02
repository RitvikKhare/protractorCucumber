import {Given,When,Then} from 'cucumber'
import {browser,element,by} from 'protractor'

Given('Super Calculator Website is opened browser in', function () {
    console.log("Given statement for remaining operators");
});

When('Select Multiply operator from dropdown', async  function () {
    await element(by.model('operator')).element(by.css("option:nth-child(4)")).click().then(async function(){
        console.log("[3] Operator Selected");
    });
  });

  When('Select Modulo operator from dropdown', async  function () {
    await element(by.model('operator')).element(by.css("option:nth-child(3)")).click().then(async function(){
        console.log("[3] Operator Selected");
    });
  });

  When('Select Divide operator from dropdown', async  function () {
    await element(by.model('operator')).element(by.css("option:nth-child(2)")).click().then(async function(){
        console.log("[3] Operator Selected");
    });
  });