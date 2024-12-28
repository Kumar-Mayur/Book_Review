package com.bookreview;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.bookreview.entity.Admin;
import com.bookreview.repo.AdminRepository;



@SpringBootTest
@TestMethodOrder(org.junit.jupiter.api.MethodOrderer.OrderAnnotation.class)
public class AdminDemoTest {
	@Autowired
	AdminRepository adminRepo;

	@Test
	@Order(1)
	public void saveAdminTest(){

		Admin a=new Admin();
     a.setUsername("admin");
     a.setPassword("admin123");
      

        adminRepo.save(a);

        assertNotNull(adminRepo.findAll());
    }
	
	
	
}


