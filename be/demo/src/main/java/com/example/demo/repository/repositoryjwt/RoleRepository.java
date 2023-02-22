package com.example.demo.repository.repositoryjwt;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.models.modelsjwt.ERole;
import com.example.demo.models.modelsjwt.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role,Long> {
    Optional<Role> findByName(ERole name);
    
}
