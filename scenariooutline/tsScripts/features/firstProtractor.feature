Feature: Test Protractor BrowserLaunch

   Feature Description: Trying to launch Browser

   Scenario Outline: Perform Specific operation with Calculator
   Given Super Calculator Website is opened browser <temp>
   When Enter number <firstNum> in First Box
   When Select <Operator> operator from dropdown
   When Enter number <secondNum> in Second Box
   When Click Go button
   Then Answer Displayed is <answerNum>

   Examples:
  |temp | firstNum | Operator | secondNum | answerNum |
  | as  |    15    | Multiply |    12     |    180    |
  | in  |    38    |  Modulo  |    32     |     6     |
  | in  |    25    |  Divide  |     5     |     5     |