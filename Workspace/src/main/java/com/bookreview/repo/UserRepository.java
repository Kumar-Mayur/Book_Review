package com.bookreview.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bookreview.entity.UserDetails;



public interface UserRepository extends JpaRepository<UserDetails, Integer>{
	
	@Query("SELECT a FROM UserDetails a WHERE a.email = ?1")
	UserDetails findUserByEmail(String email);

}
