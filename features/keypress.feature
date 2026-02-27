Feature: Expand Testing - Key Presses Page

  Scenario Outline: Verify that pressing a key displays the correct result
    Given I am on the Key Presses practice page
    When I press the "<key>" key
    Then I should see the result text "You entered: <expected_result>"

    Examples:
      | key   | expected_result |
      | Space | SPACE           |
      | a     | A               |
      | 5     | 5               |
      | Tab   | TAB             |