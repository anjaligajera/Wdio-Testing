Feature: Testing Dropdowns on Expand Testing Practice Page

  Background:
    Given I open the dropdown practice page

  Scenario: Select an option from the Simple Dropdown
    When I select "Option 1" from the Simple Dropdown
    Then the Simple Dropdown should have "Option 1" selected

  Scenario: Select a country from the Country Dropdown
    When I select "India" from the Country Dropdown
    Then the Country Dropdown should have "India" selected

  Scenario: Change Elements per Page
    When I select "50" from the Elements per Page Dropdown
    Then the Elements per Page Dropdown should have "50" selected