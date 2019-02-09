Feature: Dashboard
    As a hero enthusiasts Dean wants to easily be able to see his
    top list of heroes.

    Scenario: List top heroes
        Given Dean is on the homepage
        Then Dean should see a list of his top 4 heroes

    Scenario: Deleted heroes aren't displayed
        Given Narco is one of Deans heroes
        When Dean deletes Narco
        Then Narco should not display on the dashboard