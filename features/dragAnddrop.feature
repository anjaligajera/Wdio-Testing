Feature: Drag and Drop Functionality

  Scenario: User can drag Box A and drop it onto Box B
    Given I am on the drag and drop practice page
    Then the left box should contain "A"
    When I drag the left box to the right box
    Then the left box should contain "B"