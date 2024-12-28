package com.bookreview.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.bookreview.entity.Review;

@Repository
public interface ReviewRepository extends JpaRepository<Review, String>{
  

}
