Feature: Bookstore Application Tests

  Scenario Outline: Search for a book and add it to the cart
    Given I am on the bookstore page
    When I search for the  <book>
    Then I should see the  <book> in the results
    When I click on "Add To Cart" for that book
    Then the cart should be updated

    Examples:
      | book                          |
      | JavaScript for Web Developers |
      | The DevOps Handbook           |
      | Agile Testing                 |
