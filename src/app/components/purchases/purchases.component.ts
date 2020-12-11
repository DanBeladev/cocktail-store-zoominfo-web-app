import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/products.service';
import { Purchase } from '../../api/models/types';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      )
    ])
  ]
})
export class PurchasesComponent implements OnInit {
  public purchases: Purchase[] = [];
  dataSource;
  columnsToDisplay = ['Order', 'Date'];
  expandedElement: Purchase | null;
  constructor(private productsService: ProductService) {}

  ngOnInit(): void {
    console.log('purchases page');
    this.productsService.getPurchases().then(() => {
      this.dataSource = this.productsService.ELEMENT_DATA;
    });
  }
}
