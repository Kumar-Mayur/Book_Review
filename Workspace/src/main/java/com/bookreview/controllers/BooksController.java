package com.bookreview.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bookreview.entity.Books;
import com.bookreview.service.BooksService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/product")
public class BooksController {

	@Autowired
	private BooksService bookservice;
	
	@PostMapping("/add")
	public List<Books> addProduct(@RequestBody Books product)
	{
		Books obj = bookservice.addProduct(product);
		return bookservice.getAllProducts();
	}
	
	@GetMapping("/")
	public List<Books> getAll()
	{
		return bookservice.getAllProducts();
	}

	@GetMapping("/{name}")
	public Books getProductByname(@PathVariable String name )
	{
		return bookservice.Getproductbyname(name);
	}
	
	@GetMapping("/edit/{id}")
	public Books getProductByid(@PathVariable int id )
	{
		return bookservice.Getproductbyid(id);
	}
	
	@DeleteMapping("/{productId}")
	public void deleteById(@PathVariable int productId)
	{
		bookservice.deleteProductById(productId);
	}
	
	
	@PutMapping("/update/{productId}")
	public Books updateById(@PathVariable int productId,@RequestBody Books book)
	{
		return bookservice.updateProduct(productId, book);
	}
	
}
