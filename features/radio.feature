Feature: Radio Button Selection on ExpandTesting Page

  Scenario Outline: Verify selecting options in color and sport radio groups
    Given I open the Radio Buttons test page
    When I select the "<group>" radio button "<option>"
    Then the radio button "<option>" in group "<group>" should be selected

    Examples:
      | group  | option      |
      | Color  | Blue        |
      | Color  | Red         |
      | Color  | Yellow      |
      | Color  | Black       |
      | Color  | Green       |
      | Sport  | Basketball  |
      | Sport  | Football    |
      | Sport  | Tennis      |
