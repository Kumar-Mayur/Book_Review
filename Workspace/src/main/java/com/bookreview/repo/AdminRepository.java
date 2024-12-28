package com.bookreview.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.bookreview.entity.Admin;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Integer>{

	@Query("SELECT u FROM Admin u WHERE u.username = ?1")
	Admin findByUsername(String username);

}
