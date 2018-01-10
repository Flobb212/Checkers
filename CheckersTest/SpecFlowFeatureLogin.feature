Feature: SpecFlowFeatureLogin	


@mytag
Scenario: Guest Login
	Given I am on the login page
	When I press procede as guest
	Then the lobby page should load

Scenario: Account Login
	Given I am on the login page
	And Enter an accounts details
	When I press Login
	Then the lobby page should load
