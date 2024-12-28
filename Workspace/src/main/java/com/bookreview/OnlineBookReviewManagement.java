package com.bookreview;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("com.bookreview")
public class OnlineBookReviewManagement {

	public static void main(String[] args) {
		SpringApplication.run(OnlineBookReviewManagement.class, args);

	}

}
