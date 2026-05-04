package com.stitchnow.backend.controller;

import com.stitchnow.backend.model.User;
import com.stitchnow.backend.repository.UserRepository;
import com.stitchnow.backend.security.JwtUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class AuthController {

    @Autowired
    UserRepository userRepo;

    @Autowired
    BCryptPasswordEncoder encoder;

    @Autowired
    JwtUtil jwtUtil;

    @PostMapping("/register")
    public String register(@RequestBody User user) {
        user.setPassword(encoder.encode(user.getPassword()));
        userRepo.save(user);
        return "User registered";
    }

    @PostMapping("/login")
    public Map<String, String> login(@RequestBody Map<String, String> data) {

        System.out.println("LOGIN HIT"); // debug

        String email = data.get("email");
        String password = data.get("password");

        User user = userRepo.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!encoder.matches(password, user.getPassword())) {
            throw new RuntimeException("Invalid credentials");
        }

        String role = email.equals("admin@gmail.com") ? "ADMIN" : "USER";

        String token = jwtUtil.generateToken(email, role);

        Map<String, String> res = new HashMap<>();
        res.put("token", token);

        return res;
    }
}