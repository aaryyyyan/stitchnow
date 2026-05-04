package com.stitchnow.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stitchnow.backend.model.Order;
import com.stitchnow.backend.repository.OrderRepository;

import java.util.List;

@Service
public class OrderService {

    @Autowired
    OrderRepository repo;

    // 🔥 CREATE ORDER (user)
    public Order save(Order order, String email) {
        order.setUserEmail(email);
        order.setStatus("PLACED");
        return repo.save(order);
    }

    // 🔥 GET USER ORDERS
    public List<Order> getByUser(String email) {
        return repo.findByUserEmail(email);
    }

    // 🔥 USER: UPDATE OWN ORDER STATUS (secure)
    public Order updateStatus(Long id, String status, String email) {

        Order order = repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Order not found"));

        // 🔐 SECURITY CHECK
        if (order.getUserEmail() == null || !order.getUserEmail().equals(email)) {
            throw new RuntimeException("Unauthorized access");
        }

        order.setStatus(status);
        return repo.save(order);
    }

    // 🔥 ADMIN: GET ALL ORDERS
    public List<Order> getAll() {
        return repo.findAll();
    }

    // 🔥 ADMIN: UPDATE ANY ORDER
    public Order updateStatusAdmin(Long id, String status) {
        Order order = repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Order not found"));

        order.setStatus(status);
        return repo.save(order);
    }

    // 🔥 ADMIN: DELETE ORDER
    public void delete(Long id) {
        repo.deleteById(id);
    }
}