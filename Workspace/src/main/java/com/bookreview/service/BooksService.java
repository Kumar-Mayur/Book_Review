package com.bookreview.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bookreview.entity.Books;
import com.bookreview.repo.BooksRepository;


@Service
public class BooksService {

	@Autowired
	private BooksRepository bookRepository;

	public List<Books> getAllProducts() {
		return bookRepository.findAll();
	}
	public Books getProductById(int id) {
		Books pro= bookRepository.findById(id).get();
		return pro;
	}
	public Books addProduct(Books product) {
		return bookRepository.save(product);
	}
	public void deleteProductById(int id) {
		bookRepository.deleteById(id);
	}
	public Books updateProduct(int id,Books newProduct) {
		Books oldProduct=bookRepository.findById(id).get();
		
		if(bookRepository.findById(id).isPresent()) {
			oldProduct.setName(newProduct.getName());
			oldProduct.setAuthor(newProduct.getAuthor());
			oldProduct.setPrice(newProduct.getPrice());
			oldProduct.setCategory(newProduct.getCategory());
			bookRepository.save(oldProduct);
		}
		
		return oldProduct;
   }
	
	public Books Getproductbyname(String name) {
		Books book= bookRepository.Findbyname(name);
		return book;
		
	}
	
	public Books Getproductbyid(int id) {
		Books book= bookRepository.findById(id).get();
		return book;
		
	}
	
	public Books Getbookbycategory(String category) {
		Books book= bookRepository.findbycategory(category);
		return book;
	}
	
}
