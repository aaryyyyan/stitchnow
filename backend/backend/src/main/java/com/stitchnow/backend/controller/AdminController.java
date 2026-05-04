package com.stitchnow.backend.controller;

import com.stitchnow.backend.model.Order;
import com.stitchnow.backend.service.OrderService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin("*")
public class AdminController {

    @Autowired
    private OrderService orderService;

    // 🔥 GET ALL ORDERS
    @GetMapping("/orders")
    public List<Order> getAllOrders() {
        return orderService.getAll();
    }

    // 🔥 UPDATE STATUS
    @PutMapping("/orders/{id}")
    public Order updateStatus(@PathVariable Long id,
                              @RequestParam String status) {
        return orderService.updateStatusAdmin(id, status);
    }

    // 🔥 DELETE ORDER
    @DeleteMapping("/orders/{id}")
    public String deleteOrder(@PathVariable Long id) {
        orderService.delete(id);
        return "Deleted";
    }
}