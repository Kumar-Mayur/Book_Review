package com.bookreview.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bookreview.entity.Admin;
import com.bookreview.repo.AdminRepository;


@Service
public class AdminService {

	@Autowired
	private AdminRepository adminRepository;
	
	public Admin getAdminbyusername(String username) {
		return adminRepository.findByUsername(username);
	}
	
	public Admin save(Admin admin) {
		return adminRepository.save(admin);
	}
}
