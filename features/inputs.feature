Feature: Web Inputs Page Testing

  Scenario: User can fill out all input fields and display them
    Given I am on the inputs page
    When I enter "12345" in the number input
    And I enter "Automation Tester" in the text input
    And I enter "SuperSecret123!" in the password input
    And I enter "02-27-2026" in the date input
    And I click on the Display Inputs button
    Then The inputs should be correctly populated in the fields
    When I click on the Clear Inputs button
    Then The input fields should be empty