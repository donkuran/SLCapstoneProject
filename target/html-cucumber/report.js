$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Caplogin.feature");
formatter.feature({
  "name": "This feature will be used to test the Login page of the application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@F_Logincap"
    }
  ]
});
formatter.background({
  "name": "Open the application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the application in a browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_have_opened_the_application_in_a_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate successful login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@F_Logincap"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I click on the Login Button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter username",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the LoginB Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_LoginB_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be landed on the Main page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_should_be_landed_on_the_Main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open the application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the application in a browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_have_opened_the_application_in_a_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate successful login using test data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@F_Logincap"
    }
  ]
});
formatter.step({
  "name": "I click on the Login Button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter username \"kn@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password \"12345\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the LoginB Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_LoginB_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be landed on the Main page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_should_be_landed_on_the_Main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate successful login using multiple test data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I click on the Login Button",
  "keyword": "When "
});
formatter.step({
  "name": "I enter username \"\u003cUserName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click on the LoginB Button",
  "keyword": "And "
});
formatter.step({
  "name": "I should be landed on the Main page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ]
    },
    {
      "cells": [
        "kn@gmail.com",
        "12345"
      ]
    },
    {
      "cells": [
        "vk@gmail.com",
        "admin"
      ]
    }
  ]
});
formatter.background({
  "name": "Open the application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the application in a browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_have_opened_the_application_in_a_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate successful login using multiple test data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@F_Logincap"
    }
  ]
});
formatter.step({
  "name": "I click on the Login Button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter username \"kn@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password \"12345\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the LoginB Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_LoginB_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be landed on the Main page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_should_be_landed_on_the_Main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open the application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the application in a browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_have_opened_the_application_in_a_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate successful login using multiple test data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@F_Logincap"
    }
  ]
});
formatter.step({
  "name": "I click on the Login Button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter username \"vk@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the LoginB Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_LoginB_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be landed on the Main page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_should_be_landed_on_the_Main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open the application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the application in a browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_have_opened_the_application_in_a_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate negative login using test data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@F_Logincap"
    }
  ]
});
formatter.step({
  "name": "I click on the Login Button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter username \"kn@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password \"54321\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the LoginB Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_LoginB_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be get the error message \"Username and Password is invalid!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_should_be_get_the_error_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});