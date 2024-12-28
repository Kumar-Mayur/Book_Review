package com.bookreview.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class UserDetails{
	
	@Id 
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	private int id;
	
	private String firstname;
	
	private String lastname;

    private String email;
    
    private String password;
   
    private long phone;

    private String address;
    
    public UserDetails(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}
    
    public long getPhone() {
		return phone;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public void setPhone(long phone) {
		this.phone = phone;
	}

	public UserDetails() {

    }

    public boolean isEmpty() {
    	if(this.getId() == 0)
    		return true;
    	
    	return false;
    }

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	
}
