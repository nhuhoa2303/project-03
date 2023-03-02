package com.example.demo.repository.repositoryjwt;

import com.example.demo.models.modelsjwt.RefreshToken;
import com.example.demo.models.modelsjwt.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RefreshTokenRepository extends JpaRepository<RefreshToken,Long> {
    Optional<RefreshToken> findByToken(String token);

    @Modifying
    int deleteByUser(Users user);
}
