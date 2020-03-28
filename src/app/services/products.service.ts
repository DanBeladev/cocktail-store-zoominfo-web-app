import { Product, Purchase, PurchaseDisplay } from 'src/app/api/models/types';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { formatDate } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private http: HttpClient) {}

  public products: Product[] = [];
  public purchases: Purchase[] = [];
  public ELEMENT_DATA: PurchaseDisplay[] = [];

  getProducts() {
    this.http
      .get<Product[]>(`${environment.API_URL}/products`, {
        responseType: 'json'
      })
      .subscribe(productsApi => {
        productsApi.forEach(product => this.products.push(product));
      });
  }

  getPurchases() {
    this.http
      .get<Purchase[]>(`${environment.API_URL}/purchases`, {
        responseType: 'json'
      })
      .subscribe(ApiPurchases => {
        this.purchases = ApiPurchases;
        console.log('in service- this.purchases = ', this.purchases);
      });
  }

  getProccessesPurchases() {
    this.ELEMENT_DATA = [];
    this.purchases.forEach(fullPurchase => {
      const obj: PurchaseDisplay = {
        OrderID: fullPurchase._id,
        Cocktail: fullPurchase.product.title,
        Date: formatDate(fullPurchase.createdDate, 'yyyy/MM/dd', 'en'),
        BuyerName: fullPurchase.user.name,
        Email: fullPurchase.user.emailAddress,
        Phone: fullPurchase.user.phoneNumber,
        Description: fullPurchase.product.description,
        ImgUrl: fullPurchase.product.picture,
        Price: fullPurchase.product.price
      };
      this.ELEMENT_DATA.push(obj);
    });
  }
}
