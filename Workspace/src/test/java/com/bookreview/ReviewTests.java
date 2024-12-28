package com.bookreview;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.bookreview.entity.Review;
import com.bookreview.repo.ReviewRepository;

@TestMethodOrder(org.junit.jupiter.api.MethodOrderer.OrderAnnotation.class)
@SpringBootTest

public class ReviewTests {
	
	@Autowired
	ReviewRepository reviewRepo;
	
	@Test
	@Order(1)
	public void addReview() {
		Review review = new Review();
		review.setName("John");
		review.setReview("Great book!");
		review.setRating(4);
		review.setBookname("JAVA");
	
		reviewRepo.save(review);
		assertNotNull(reviewRepo.findAll());
	}
	
	
}
