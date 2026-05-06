package com.stitchnow.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.stitchnow.backend.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
}