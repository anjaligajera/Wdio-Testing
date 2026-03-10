Feature: File Upload Functionality

  Scenario: User can successfully upload a text file
    Given I am on the file upload page
    When I select a file named "test-upload.txt" to upload
    And I click the upload button
    Then I should see a success message indicating the file was uploaded