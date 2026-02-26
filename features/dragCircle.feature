Feature: Drag and Drop Circles

  Scenario: Drag circle to the drop area
    Given I open the drag and drop circles page
    When I drag the circle to the drop area
    Then The circle should be dropped successfully
