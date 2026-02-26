Feature: OTP Login Functionality

  Scenario: Successful login with valid credentials
    Given I am on the OTP login page
    When I enter the email "practice@expandtesting.com"
    And I click on the Send OTP Code button
    And I enter the OTP "214365"
    And I click on the Verify button
    Then I should see a success message saying "Welcome"