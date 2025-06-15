package com.yourorg.backend.service;

import com.yourorg.backend.dto.AuthResponse;
import com.yourorg.backend.dto.UserDto;
import com.yourorg.backend.model.User;
import com.yourorg.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Transactional
    public AuthResponse signup(String email, String password) {
        try {
            if (userRepository.findByEmail(email).isPresent()) {
                throw new RuntimeException("Email already exists");
            }

            User user = new User();
            user.setEmail(email);
            user.setPassword(passwordEncoder.encode(password));
            user = userRepository.save(user);

            return new AuthResponse(UserDto.fromUser(user));
        } catch (Exception e) {
            throw new RuntimeException("Failed to create user: " + e.getMessage());
        }
    }

    @Transactional
    public AuthResponse login(String email, String password) {
        try {
            User user = userRepository.findByEmail(email)
                    .orElseThrow(() -> new RuntimeException("Invalid email or password"));

            if (!passwordEncoder.matches(password, user.getPassword())) {
                throw new RuntimeException("Invalid email or password");
            }

            return new AuthResponse(UserDto.fromUser(user));
        } catch (Exception e) {
            throw new RuntimeException("Failed to login: " + e.getMessage());
        }
    }

    public UserDto getCurrentUser() {
        // For now, return null as we're not using session management
        return null;
    }
} 