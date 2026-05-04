package com.stitchnow.backend.controller;

import com.stitchnow.backend.model.Order;
import com.stitchnow.backend.service.OrderService;
import com.stitchnow.backend.security.JwtUtil;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class OrderController {

    @Autowired
    OrderService orderService;

    @Autowired
    JwtUtil jwtUtil;

    // 🔥 CREATE ORDER
    @PostMapping("/orders")
    public Order createOrder(@RequestBody Order order,
                             HttpServletRequest request) {

        String token = request.getHeader("Authorization").substring(7);
        String email = jwtUtil.extractClaims(token).getSubject();

        return orderService.save(order, email);
    }

    // 🔥 GET USER ORDERS
    @GetMapping("/orders")
    public List<Order> getOrders(HttpServletRequest request) {

        String token = request.getHeader("Authorization").substring(7);
        String email = jwtUtil.extractClaims(token).getSubject();

        return orderService.getByUser(email);
    }

    // 🔥 UPDATE USER ORDER
    @PutMapping("/orders/{id}")
    public Order updateStatus(@PathVariable Long id,
                              @RequestParam String status,
                              HttpServletRequest request) {

        String token = request.getHeader("Authorization").substring(7);
        String email = jwtUtil.extractClaims(token).getSubject();

        return orderService.updateStatus(id, status, email);
    }
}