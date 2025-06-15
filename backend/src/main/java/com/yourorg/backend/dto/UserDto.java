package com.yourorg.backend.dto;

import com.yourorg.backend.model.User;

public class UserDto {
    private Long id;
    private String email;

    public UserDto() {
    }

    public UserDto(Long id, String email) {
        this.id = id;
        this.email = email;
    }

    public static UserDto fromUser(User user) {
        return new UserDto(user.getId(), user.getEmail());
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
} 