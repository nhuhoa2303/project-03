package com.example.demo.payload.response;

import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

public class JwtResponse {
   
    private String token;
    private String type = "Bearer";
    private Long id;
    private String username;
    private String email;
    private String refreshToken;
    private List<String> roles;




    public JwtResponse(String accessToken, String refreshToken, Long id, String username, String email, List<String> roles) {
        this.token = accessToken;
        this.refreshToken = refreshToken;
        this.id = id;
        this.username = username;
        this.email = email;
        this.roles = roles;
    }

}
