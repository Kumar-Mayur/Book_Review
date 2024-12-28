
package com.bookreview;
import com.bookreview.controllers.BooksController;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
public class BookDeleteTest {

    @Autowired
    private BooksController booksController;

    private MockMvc mockMvc;

    @BeforeEach
    public void setUp() {
        mockMvc = MockMvcBuilders.standaloneSetup(booksController).build();
    }

    @Test
    public void testDeleteById() throws Exception {
       
        int productId = 3;

        mockMvc.perform(MockMvcRequestBuilders.delete("/api/product/" + productId)
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());

        
    }
}