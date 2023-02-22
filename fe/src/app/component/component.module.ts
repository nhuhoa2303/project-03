import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentRoutingModule } from './component-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsEditComponent } from './products-edit/products-edit.component';
import { ProductsCreateComponent } from './products-create/products-create.component';
import { CartProductComponent } from './cart-product/cart-product.component';
import { DetailProductComponent } from './detail-product/detail-product.component';


@NgModule({
  declarations: [
    ProductsListComponent,
    ProductsEditComponent,
    ProductsCreateComponent,
    CartProductComponent,
    DetailProductComponent
  ],
  imports: [
    CommonModule,
    ComponentRoutingModule
  ]
})
export class ComponentModule { }
