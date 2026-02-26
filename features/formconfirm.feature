Feature: Form Validation on ExpandTesting

  Scenario: Attempt to submit the form with empty fields
    Given I open the form validation page
    When I click the Register button
    Then I should see validation error messages

  Scenario: Successfully submit the form with valid data
    Given I open the form validation page
    When I fill in the form with valid details
    And I select the payment method "card"
    And I click the Register button
    Then the form should be processed