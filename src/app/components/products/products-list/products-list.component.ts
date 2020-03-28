import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from 'src/app/api/models/types';
import { MatDialog} from '@angular/material/dialog';
import { PaypalcomponentComponent } from '../dialog/paypalcomponent/paypalcomponent.component';
import { PayPalService } from 'src/app/services/pay-pal.service';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductListComponent implements OnInit {
products: Product[] = this.productService.products;

 constructor(public paypalService: PayPalService, public productService: ProductService, public dialog: MatDialog) {}

openBuyDialog(product) {
  this.paypalService.product = product;
  const dialogRef = this.dialog.open(PaypalcomponentComponent, {
    data: product
  });

  dialogRef.afterClosed().subscribe(resulet => {
    console.log('The dialog wsa closed');
  });
}


 ngOnInit() {
   this.productService.getProducts();
 }
}
