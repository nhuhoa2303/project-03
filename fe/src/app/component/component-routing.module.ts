import { DetailProductComponent } from './detail-product/detail-product.component';
import { CartProductComponent } from './cart-product/cart-product.component';
import { ProductsCreateComponent } from './products-create/products-create.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component: HomePageComponent},
  {path:'list', component: ProductsListComponent},
  {path:'create', component: ProductsCreateComponent},
  {path:'cart', component: CartProductComponent},
  {path:'detail', component: DetailProductComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
