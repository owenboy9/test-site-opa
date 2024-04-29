Feature: Search


  Scenario: Search for a term
    Given I am on the "/" page
    And I accept cookies
    When I search for "utopi"
    Then I should see "utopi" in the search results


  Scenario Outline: Search for several terms
    Given I am on the "/" page
    And I accept cookies
    When I search for "<searchTerm>"
    Then I should see "<searchTerm>" in the search results


    Examples:
      | searchTerm |
      | utopi      |
      | testare    |
      | lycka      |