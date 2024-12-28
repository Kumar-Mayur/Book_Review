package com.bookreview;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;

import com.bookreview.entity.Admin;

@DisplayName("AdminTestDemo ")
public class AdminTest {

	@BeforeEach
	@Test
	public void test3() {
		System.out.print("\nBeforeSetup");
	}
	
	@Test
	@Order(1)
	public void test() {
		System.out.print("\nTest case 1 passed" +" " );
	}
	
	@Test
	@Order(2) 
	public void test1() {
		Admin admin = new Admin();
		admin.setUsername("admin");
		String ad= admin.getUsername();
		
		assertEquals("admin",ad);
		System.out.print("\nTest case 2 passed");

	}
	
	@Test
	@Order(3)
	public void savepass() {
		Admin ad= new Admin();
		ad.setPassword("admin");
		
		String admin = ad.getPassword();
		assertNotEquals("admin@123",ad);
		
		System.out.print("\nTest case 4 passed");

	}
	
	@AfterEach
	@Test
	public void test4() {
		System.out.print("\nAfter Setup");
	}
}
