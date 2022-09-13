package stepDefs;

import cucumber.api.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;

@CucumberOptions(

		plugin = { "html:target/html-cucumber", "json:target/cucumber.json" },

		features = "src/test/java/features",

		tags = { "@F_Logincap" }, // to run one single tag

		glue = { "stepDefs" }

)

public class TestRunner extends AbstractTestNGCucumberTests {

}
