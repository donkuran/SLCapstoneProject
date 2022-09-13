package stepDefs;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginSteps {

	WebDriver driver = BaseClass.driver;

	@Given("I have opened the application in a browser")
	public void i_have_opened_the_application_in_a_browser() {

		driver.get("http://localhost:8585/medicare/");

		// Maximize window
		driver.manage().window().maximize();

		// wait for browser to load - implicit
		driver.manage().timeouts().implicitlyWait(20000, TimeUnit.MILLISECONDS);

	}

	@When("I click on the Login Button")
	public void i_click_on_the_Login_Button() {

		WebElement LoginBtn = driver.findElement(By.id("login"));
		LoginBtn.click();

		// wait for browser to load - implicit
		driver.manage().timeouts().implicitlyWait(10000, TimeUnit.MILLISECONDS);
	}

	@When("I enter username")
	public void i_enter_username() {

		WebElement UserName = driver.findElement(By.id("username"));
		UserName.sendKeys("kn@gmail.com");
	}

	@When("I enter password")
	public void i_enter_password() {

		WebElement Password = driver.findElement(By.id("password"));
		Password.sendKeys("12345");
	}

	@Then("I should be landed on the Main page")
	public void i_should_be_landed_on_the_Main_page() {

		System.out.println("Inside Products Page");
	}

	@When("I enter username {string}")
	public void i_enter_username(String UserNameVal) {

		WebElement UserName = driver.findElement(By.id("username"));
		UserName.sendKeys(UserNameVal);
	}

	@When("I enter password {string}")
	public void i_enter_password(String PasswordVal) {

		WebElement Password = driver.findElement(By.id("password"));
		Password.sendKeys(PasswordVal);
	}

	@Then("I should be get the error message {string}")
	public void i_should_be_get_the_error_message(String ExpMsg) {

		WebElement ErrorMsg = driver.findElement(By.xpath("//div[@class='alert alert-danger fade in']"));

		String ActualMsg = ErrorMsg.getText();

		Assert.assertEquals(ExpMsg, ActualMsg);
	}
}
