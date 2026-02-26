Feature: Checkboxes Functionality

  Scenario: Verify user can select and unselect checkboxes
    Given I open the checkboxes page
    Then I should see two checkboxes

    When I select the first checkbox
    Then The first checkbox should be selected

    When I unselect the second checkbox
    Then The second checkbox should not be selected
