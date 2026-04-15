Feature: Swag Labs Login Validation

  Scenario Outline: Data Driven Login (UC-2)
    Given I am on the login page
    When I login with username "<username>" and password "<password>"
    Then the login should result in <status>

    Examples:
      | username        | password     | status  |
      | standard_user   | secret_sauce | success |
      | locked_out_user | secret_sauce | failure |