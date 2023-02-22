package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.Products;
import com.example.demo.repository.IProductsRepository;

@CrossOrigin
@RestController
public class DisplayListDataController {
    @Autowired
    private IProductsRepository iProductsRepository;

    @GetMapping("/list")
    public ResponseEntity<List<Products>> displayListProduct(){
        List<Products> prodList = this.iProductsRepository.findAll();
        if((prodList.isEmpty())){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(prodList,HttpStatus.OK);
    }
    
}
