@F_Logincap
Feature: This feature will be used to test the Login page of the application

  Background: Open the application
    Given I have opened the application in browser

  @Sanity
  Scenario: Validate successful login
    When I click on the Login Button
    And I enter username
    And I enter password
    And I click on the Login Button
    Then I should be landed on the Main page

  #This is a comment
  Scenario: Validate successful login using test data
    When I click on the Login Button
    And I enter username "kn@gmail.com"
    And I enter password "12345"
    And I click on the Login Button
    Then I should be landed on the Main page

  Scenario Outline: Validate successful login using multiple test data
    When I click on the Login Button
    And I enter username "<UserName>"
    And I enter password "<Password>"
    And I click on the Login Button
    Then I should be landed on the Main page

    Examples: 
      | UserName     | Password |
      | kn@gmail.com |    12345 |
      | vk@gmail.com | admin    |

  Scenario: Validate negative login using test data
    When I click on the Login Button
    And I enter username "kn@gmail.com"
    And I enter password "54321"
    And I click on the Login Button
    Then I should be get the error message "Username and Password is invalid!"
