import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './products/products-list/products-list.component';
import { PurchasesComponent } from './purchases/purchases.component';


const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'home', component: ProductListComponent },
  { path: 'myOrders', component: PurchasesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
