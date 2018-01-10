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

        [Given("I am on the login page")]
        public void GivenIAmOnTheLoginPage()
        {
            thisDriver.Url = "file:///C:/Users/Lobb/Desktop/Checkers/login.html";

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
    }
}
