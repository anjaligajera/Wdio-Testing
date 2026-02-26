Feature: Mouse Hovers

  Scenario Outline: Hovering over users reveals additional information
    Given I am on the hovers page
    When I hover over the avatar of user <index>
    Then I should see the name "name: user<index>"
    And the "View profile" link should be visible for user <index>

    Examples:
      | index |
      | 1     |
      | 2     |
      | 3     |