package com.stitchnow.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.stitchnow.backend.model.Order;
import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {

    // 🔥 NEW
    List<Order> findByUserEmail(String userEmail);
}