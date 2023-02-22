
package com.example.demo.models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;



// import lombok.Getter;
// import lombok.RequiredArgsConstructor;
// import lombok.Setter;
@Entity
@Getter
@Setter
@RequiredArgsConstructor
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String image;
    private Integer quantity;
    @OneToMany(mappedBy = "category")
    @JsonBackReference
    private List<Products> productList;
    
   
}
