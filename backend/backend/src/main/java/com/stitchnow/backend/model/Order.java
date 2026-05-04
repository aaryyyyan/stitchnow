package com.stitchnow.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String item;
    private String price;
    private String status;

    // 🔥 NEW
    private String userEmail;

    public Order() {}

    public Order(String item, String price) {
        this.item = item;
        this.price = price;
    }

    public Long getId() { return id; }

    public String getItem() { return item; }
    public void setItem(String item) { this.item = item; }

    public String getPrice() { return price; }
    public void setPrice(String price) { this.price = price; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public String getUserEmail() { return userEmail; }
    public void setUserEmail(String userEmail) { this.userEmail = userEmail; }
}