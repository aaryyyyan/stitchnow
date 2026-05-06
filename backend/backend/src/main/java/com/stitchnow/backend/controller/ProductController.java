package com.stitchnow.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.stitchnow.backend.model.Product;
import com.stitchnow.backend.repository.ProductRepository;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin("*")
public class ProductController {

    @Autowired
    ProductRepository repo;

    // GET ALL PRODUCTS
    @GetMapping
    public List<Product> getAll() {
        return repo.findAll();
    }

    // ADD PRODUCT
    @PostMapping
    public Product add(@RequestBody Product product) {
        return repo.save(product);
    }

    // UPDATE PRODUCT
    @PutMapping("/{id}")
    public Product update(
            @PathVariable Long id,
            @RequestBody Product updated
    ) {

        Product p = repo.findById(id)
                .orElseThrow();

        p.setName(updated.getName());
        p.setImage(updated.getImage());
        p.setPrice(updated.getPrice());
        p.setStock(updated.getStock());

        return repo.save(p);
    }

    // DELETE PRODUCT
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        repo.deleteById(id);
    }
}