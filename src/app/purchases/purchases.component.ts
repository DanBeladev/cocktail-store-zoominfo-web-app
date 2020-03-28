import { Component, OnInit } from '@angular/core';
import { ProductService } from '../products/products.service';
import { Purchase, PurchaseDisplay } from '../api/models/types';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class PurchasesComponent implements OnInit {
  public purchases: Purchase[] = this.productsService.purchases;
  dataSource = this.purchases;
  columnsToDisplay = ['OrderID', 'Cocktail', 'Date', 'Buyer', 'Email', 'Phone'];
  expandedElement: Purchase | null;
  constructor(private productsService: ProductService) { }

  ngOnInit(): void {
    this.productsService.getPurchases();
    this.productsService.getProccessesPurchases();
  }

}


