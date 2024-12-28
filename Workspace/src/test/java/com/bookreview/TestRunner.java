package com.bookreview;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.runner.JUnitCore;
import org.junit.runner.Result;
import org.junit.runner.notification.Failure;


@DisplayName("Main Test Class")
 public class TestRunner {

	@Test
	public void test() {
		
		Result result = JUnitCore.runClasses(AdminDemoTest.class,UserTest.class);
		
		for(Failure failure: result.getFailures()) {
			System.out.print(failure.toString());
		}
		System.out.print(result.wasSuccessful());
		}
	
}
