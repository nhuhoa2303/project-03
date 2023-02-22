package com.example.demo.models;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@RequiredArgsConstructor
@Entity
public class Products {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    @Column(columnDefinition = "date")
    private Date createDate;
    private Integer quantity;
    private Double price;
    private Double priceSale;
    private String madeIn;
    @Column(columnDefinition = "text")
    private String specifications;

    @ManyToOne
    @JoinColumn(name = "id_category", referencedColumnName = "id")
    private Category category;

    @Column(columnDefinition = "text")
    private String image;
    @Column(columnDefinition = "bit(1) default 0")
    private Boolean isDelete;
    @Column(columnDefinition = "text")
    private String detail;

    // @OneToMany(mappedBy = "product")
    // @JsonIgnore
    // private List<Cart> cartList;

}
