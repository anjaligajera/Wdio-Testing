Feature: Forgot Password Page

  Scenario: User resets password with valid email
    Given I am on the forgot password page
    When I enter the email "mytestemail@example.com"
    And I click the Retrieve password button
    Then I should see a message saying "An email has been sent"