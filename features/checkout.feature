Feature: Swag Labs Checkout Flow

  Scenario Outline: Happy Path Checkout (UC-1)
    Given I am on the login page
    When I login with username "<username>" and password "<password>"
    And I add the product "<product_name>" to the cart
    And I navigate to the cart
    Then I should see the product "<product_name>" in the cart
    When I proceed to checkout
    And I fill in the checkout information with first name "<first_name>", last name "<last_name>", and zip code "<zip>"
    And I complete the checkout
    Then I should see the checkout success message "Thank you for your order!"

    Examples:
      | username      | password     | product_name          | first_name | last_name | zip   |
      | standard_user | secret_sauce | Sauce Labs Backpack   | John       | Doe       | 12345 |