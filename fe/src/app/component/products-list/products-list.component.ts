import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Products } from 'src/app/models/Products';
import { ApiDisplayService } from 'src/app/services/ApiDisplay/api-display.service';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  productsList: Products[] = [];
  constructor(private apiDisplay: ApiDisplayService, private title: Title) {
    this.title.setTitle("Danh sach hang")
  }

  getAll() {
    this.apiDisplay.getAll().subscribe(d => {
      this.productsList = d;
      console.log(d);

    })
  }

  ngOnInit(): void {
    this.getAll();

  }


}
