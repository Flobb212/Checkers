using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using TechTalk.SpecFlow;

namespace CheckersTest
{
    [Binding]
    public sealed class StepDefinition
    {
        IWebDriver thisDriver = new ChromeDriver();

        //First Scenario
        [Given("I am on the login page")]
        public void GivenIAmOnTheLoginPage()
        {
            thisDriver.Url = "localhost";

            if (thisDriver.FindElement(By.Id("newUsername")).Displayed == true)
            {
                Console.WriteLine("Correctly on login page");
            }
            else
            {
                Console.WriteLine("Not on Login page");
            }
       
        }

        [When("I press procede as guest")]
        public void WhenIPressProcedeAsGuest()
        {
            var button = thisDriver.FindElement(By.Id("newUsername"));

            button.Click();
        }

        [Then("the lobby page should load")]
        public void ThenTheLobbyPageShouldLoad()
        {
            if (thisDriver.FindElement(By.Id("head")).Displayed == true)
            {
                Console.WriteLine("Correctly on lobby page");
            }
            else
            {
                Console.WriteLine("Not on Lobby page");
            }
        }

        //Second Scenario
        [When("I enter an accounts details")]
        public void GivenIEnterAnAccountsDetails()
        {
            var usr = "Derek123";
            var pass = "ham";            
        }

        [Then("my details should be in lobby page")]
        public void ThenMyDetailsShouldBeInLobbyPage()
        {
            if (thisDriver.FindElement(By.Id("lobbyUser")).Text == "Derek123")
            {
                Console.WriteLine("Login successful");
            }
            else
            {
                Console.WriteLine("Login failed");
            }
        }

        //Third Scenario
        [When("I press AJAX button")]
        public void WhenIPressAJAXButton()
        {
            var button = thisDriver.FindElement(By.Id("AJAXButton"));

            button.Click();
        }

        [Then("the text should change")]
        public void ThenTheTextShouldChange()
        {
            if (thisDriver.FindElement(By.Id("AJAXCall")).Text == "This is the text that is called by AJAX!")
            {
                Console.WriteLine("AJAX successful");
            }
            else
            {
                Console.WriteLine("AJAX failed");
            }
        }
    }
}
