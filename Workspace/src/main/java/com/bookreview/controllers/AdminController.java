package com.bookreview.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bookreview.entity.Admin;
import com.bookreview.service.AdminService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/Admin")
public class AdminController {

	@Autowired
	AdminService adminservice;
	
	@PostMapping("/login")
	public boolean findbyusername(@RequestParam("username") String username,@RequestParam("password") String password)
	{
		Admin admin= adminservice.getAdminbyusername(username);
		
		if(admin != null )  
			      return true;
		else
		          return false;
	
	}
	@PostMapping("/changepassword")
	public Admin ChangePassword(@RequestParam("username") String username,@RequestParam("password") String password)
	{
		Admin admin=adminservice.getAdminbyusername(username);
		if(username==admin.getUsername())
			    admin.setUsername(username);
			    admin.setPassword(password);
		        adminservice.save(admin);
		        return admin;
		       
	}
}
