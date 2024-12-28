package com.bookreview.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.bookreview.entity.UserDetails;
import com.bookreview.repo.UserRepository;



@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired  
    JdbcTemplate jdbc; 
	
	public UserDetails getUserByEmail(String email) {
		return userRepository.findUserByEmail(email);
	}
	
	public List<UserDetails> listAll()
	{
		return userRepository.findAll();
	}
	
	public UserDetails save(UserDetails user) {
		return userRepository.save(user);
		
	}
	public UserDetails FindByid(int id) {
		UserDetails user=userRepository.findById(id).get();
		return user;
	}
	
}
