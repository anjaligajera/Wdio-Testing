Feature: File Upload on ExpandTesting

  Scenario: Successfully upload a file
    Given I open the file upload page
    When I select a dummy test file to upload
    And I click the Upload button
    Then the file should be successfully uploaded