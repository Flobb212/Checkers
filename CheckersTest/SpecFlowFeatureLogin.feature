Feature: SpecFlowFeatureLogin	


@Browswer:Chrome
Scenario: Guest Login
	Given I am on the login page
	When I press procede as guest
	Then the lobby page should load

Scenario: Account Login
	Given I am on the login page
	When I enter an accounts details
	Then my details should be in lobby page

Scenario: Account Login
	Given I am on the login page	
	When I press AJAX button
	Then the text should change