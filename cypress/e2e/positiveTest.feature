Feature: Positive scenario
  Scenario Outline: Complete Personal Details form
    Given Open application homepage
    Then Verify form and inputs
    When Complete Full Name "<Full Name>" inputs
    Then Verify Full Name
    When Complete Cellphone "<Cellphone>" inputs
    Then Verify Cellphone
    When Complete Email "<Email>" inputs
    Then Verify Email
    When Complete Physical Address "<PAdress>" inputs
    Then Verify Physical Address
    When Verify Next button status
    Then Click Next button
    When Salary Information page open
    Then Verify SI form elements and inputs
    When Complete Gross Income "<Gross>" inputs
    Then Verify Gross Income
    When Complete Net Income "<Net>" inputs
    Then Verify Net Income
    When Complete Expenses Income "<Expenses>" inputs
    Then Verify Expenses Income
    Then Verify Next button status is blue
    When Click on Next button
    Then Application status page open
    Then Result status "<ResStatus>"

    Examples:
      | Full Name        | Cellphone  | Email                    | PAdress                                      | Gross   | Net  | Email                    | Expenses  | ResStatus            |
      | Mikalai Ananka   | 0123456789 | testmail@notemail.domain | BY Minsk Programmer str, 3, unit 311 220000  | 10000   | 5001 | testmail@notemail.domain | 1500      | Application Approved |
      | Mikalai Ananka   | 0987654321 | testmail@notemail.domain | BY Minsk Programmer str, 3, unit 311 220000  | 10000   | 9999 | testmail@notemail.domain | 9500      | Application Rejected |
