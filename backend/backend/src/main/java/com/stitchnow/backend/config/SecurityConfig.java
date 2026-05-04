package com.stitchnow.backend.config;

import com.stitchnow.backend.security.JwtFilter;
import jakarta.servlet.http.HttpServletResponse;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;

import java.util.List;

@Configuration
public class SecurityConfig {

    private final JwtFilter jwtFilter;

    public SecurityConfig(JwtFilter jwtFilter) {
        this.jwtFilter = jwtFilter;
    }

    // 🔥 REQUIRED (THIS FIXES YOUR ERROR)
    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        return http
                .csrf(csrf -> csrf.disable())

                // 🔥 JWT MUST BE STATELESS
                .sessionManagement(session ->
                        session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                )

                // 🔥 CORS
                .cors(cors -> cors.configurationSource(request -> {
                    CorsConfiguration c = new CorsConfiguration();
                    c.setAllowedOriginPatterns(List.of("*"));
                    c.setAllowedMethods(List.of("GET","POST","PUT","DELETE","OPTIONS"));
                    c.setAllowedHeaders(List.of("*"));
                    return c;
                }))

                .authorizeHttpRequests(auth -> auth
                        .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll()
                        .requestMatchers("/api/login", "/api/register").permitAll()
                        .requestMatchers("/api/admin/**").hasRole("ADMIN")
                        .anyRequest().authenticated()
                )

                // 🔥 JWT FILTER
                .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class)

                // 🔥 CLEAN ERROR RESPONSE
                .exceptionHandling(ex -> ex
                        .authenticationEntryPoint((req, res, e) -> {
                            res.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                            res.getWriter().write("Unauthorized");
                        })
                )

                .build();
    }
}