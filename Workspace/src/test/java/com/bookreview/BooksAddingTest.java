package com.bookreview;
import static org.junit.jupiter.api.Assertions.assertEquals;

 // Import the specific assertNull method

import org.junit.Before;
import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.bookreview.entity.Books;
import com.bookreview.service.BooksService;
@SpringBootTest
public class BooksAddingTest {

    @Autowired
    private BooksService booksService;

    @Test
    public void testAddProduct() {
      
        Books newBook = new Books();
        newBook.setName("The journey of key");
        newBook.setAuthor("Saturn");
        newBook.setPrice(2000);
        newBook.setCategory("Astro");

        
        Books addedBook = booksService.addProduct(newBook);

        
        assertEquals(newBook.getName(), addedBook.getName());
        assertEquals(newBook.getAuthor(), addedBook.getAuthor());
        assertEquals(newBook.getPrice(), addedBook.getPrice());
        assertEquals(newBook.getCategory(), addedBook.getCategory());
    }
    
    
   
}
