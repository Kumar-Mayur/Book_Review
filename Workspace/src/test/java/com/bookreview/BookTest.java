package com.bookreview;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.bookreview.entity.Books;
import com.bookreview.repo.BooksRepository;

import java.util.Optional;

@TestMethodOrder(org.junit.jupiter.api.MethodOrderer.OrderAnnotation.class)
@SpringBootTest
public class BookTest {

    @Autowired
    BooksRepository brepo;

    @Test
    @Order(2)
    public void getAndUpdateBookTest() {
        // Step 1: Get the book by ID
        Optional<Books> optionalBook = brepo.findById(2);
        
        // Step 2: Verify that the book is present
        assertTrue(optionalBook.isPresent());

        // Step 3: Extract the book from the optional
        Books book = optionalBook.get();
        assertEquals(2, book.getId());

        // Step 4: Update the book properties
        book.setPrice(2000);
        book.setName("The journey of key");
        book.setCategory("Astro");
        book.setAuthor("Saturn");

        // Step 5: Save the updated book
        brepo.save(book);

        // Step 6: Retrieve the updated book
        Optional<Books> updatedOptionalBook = brepo.findById(2);
        assertTrue(updatedOptionalBook.isPresent());

        // Step 7: Extract the updated book from the optional
        Books updatedBook = updatedOptionalBook.get();

        // Step 8: Verify the updated properties
        assertEquals(2000, updatedBook.getPrice());
        assertEquals("Saturn", updatedBook.getAuthor());
        assertEquals("The journey of key", updatedBook.getName());
        assertEquals("Astro", updatedBook.getCategory());
    }
}
