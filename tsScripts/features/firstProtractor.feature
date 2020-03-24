Feature: Test Protractor BrowserLaunch

   Feature Description: Trying to launch Browser

   @ProtractorTest
   Scenario: Perform Modulo of Numbers with Calculator
   Given Super Calculator Website is opened browser
   #When Title is Super Calculator
   When Enter number 43 in First Box
   When Select Modulo operator from dropdown
   When Enter number 40 in Second Box
   When Click Go button
   Then Answer Displayed is 3


