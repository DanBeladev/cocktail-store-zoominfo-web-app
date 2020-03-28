import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchasesComponent } from './components/purchases/purchases.component';
import { ProductListComponent } from './components/products/products-list/products-list.component';


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
