Feature: Bendigo Assesment

    Scenario: Check eligibility for a credit card application

        Given User is launching the Bendigo url
        When User is in Landing page
        Then User validates the Landing Page and navigates to Credit Card Page
        Then User validates the Credit Cards Page and navigates to apply Bendigo Bright Credit Card
        Then User navigates to Apply Credit Card Page and validates his elegibility
        Then User validares the application is cancelled

