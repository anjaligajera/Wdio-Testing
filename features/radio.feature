Feature: Radio Buttons Functionality

  Scenario: User can select their favorite color and sport
    Given I am on the radio buttons page
    
    # Testing the color radio buttons
    When I select the "red" color radio button
    Then the "red" color radio button should be selected
    And the "blue" color radio button should not be selected
    
    # Testing the sport radio buttons
    When I select the "football" sport radio button
    Then the "football" sport radio button should be selected
    And the "basketball" sport radio button should not be selected
    
    # Testing disabled buttons (Black is typically disabled on this site)
    When I attempt to select the "green" color radio button
    Then the "green" color radio button should be disabled