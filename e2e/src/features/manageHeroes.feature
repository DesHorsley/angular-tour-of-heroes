Feature: Manage a list of heroes
    As a hero enthusiast Peter would like to be able to add to
    and remove from his list of heros. He'd also like to be able
    to update his heroes names.

    Scenario: Deleted heroes aren't displayed
        Given Narco is one of Deans heroes
        When Dean deletes Narco
        Then Narco should not display on the dashboard