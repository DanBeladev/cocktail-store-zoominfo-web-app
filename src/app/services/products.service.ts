import { Product, Purchase, PurchaseDisplay } from 'src/app/api/models/types';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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
    this.http.get<Purchase[]>(`${environment.API_URL}/purchases`, {
      responseType: 'json'
    })
    .subscribe(ApiPurchases => {
      ApiPurchases.forEach(purchase => this.purchases.push(purchase));
    });
  }

  getProccessesPurchases() {
      this.purchases.forEach((fullPurchase) => {
      const obj: PurchaseDisplay = {
        OrderID: fullPurchase._id,
        Cocktail: fullPurchase.product.title,
        Date: fullPurchase.createdDate,
        BuyerName: fullPurchase.user.name,
        Email: fullPurchase.user.emailAddress,
        Phone: fullPurchase.user.phoneNumber,
        Description: fullPurchase.product.description,
        ImgUrl: fullPurchase.product.picture
      };
      this.ELEMENT_DATA.push(obj);
    });
  }
}
