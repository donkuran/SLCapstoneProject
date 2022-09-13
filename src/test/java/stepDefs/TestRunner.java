package stepDefs;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)

@CucumberOptions(

		plugin = { "html:target/html-cucumber", "json:target/cucumber.json" },

		features = "src/test/java/features",

		tags = { "@F_Logincap" }, // to run one single tag

		glue = { "stepDefs" }

)

public class TestRunner {

}
