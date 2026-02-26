Feature: User Registration

  Scenario: Successful registration with valid credentials
    Given I am on the registration page
    When I enter a unique username
    And I enter the password "SuperSecretPassword!"
    And I enter the confirm password "SuperSecretPassword!"
    And I click on the Register button
    Then I should be redirected to the login page
    And I should see a success message