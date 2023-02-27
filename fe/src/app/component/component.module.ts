import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentRoutingModule } from './component-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsEditComponent } from './products-edit/products-edit.component';
import { ProductsCreateComponent } from './products-create/products-create.component';
import { CartProductComponent } from './cart-product/cart-product.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { SignupSigninComponent } from './signup-signin/signup-signin.component';


@NgModule({
  declarations: [
    ProductsListComponent,
    ProductsEditComponent,
    ProductsCreateComponent,
    CartProductComponent,
    DetailProductComponent,
    SignupSigninComponent
  ],
  imports: [
    CommonModule,
    ComponentRoutingModule,
    ReactiveFormsModule
  ]
})
export class ComponentModule { }
