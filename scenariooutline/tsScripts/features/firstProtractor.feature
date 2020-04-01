Feature: Test Protractor BrowserLaunch

   Feature Description: Trying to launch Browser

   Scenario: Perform Multiplication of Numbers with Calculator
   Given Super Calculator Website is opened browser as
   When Enter number 15 in First Box
   When Select Multiply operator from dropdown
   When Enter number 12 in Second Box
   When Click Go button
   Then Answer Displayed is 180

   Scenario: Perform Modulo of Numbers with Calculator
   Given Super Calculator Website is opened browser
   When Enter number 38 in First Box
   When Select Modulo operator from dropdown
   When Enter number 32 in Second Box
   When Click Go button
   Then Answer Displayed is 6

   Scenario: Perform Division of Numbers with Calculator
   Given Super Calculator Website is opened browser
   When Enter number 25 in First Box
   When Select Divide operator from dropdown
   When Enter number 5 in Second Box
   When Click Go button
   Then Answer Displayed is 5


