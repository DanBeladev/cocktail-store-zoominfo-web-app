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
    this.products = [];
    this.http
      .get<Product[]>(`${environment.API_URL}/products`, {
        responseType: 'json'
      })
      .subscribe(productsApi => {
        productsApi.forEach(product => this.products.push(product));
      });
  }

  getPurchases() {
    const promise = new Promise((resolve, reject) => {
      this.http
        .get<Purchase[]>(`${environment.API_URL}/purchases`, {
          responseType: 'json'
        })
        .toPromise()
        .then(
          res => {
            this.purchases = res;
            this.getProccessesPurchases();
            resolve();
          },
          msg => {
            reject(msg);
          }
        );
    });
    return promise;
  }

  getProccessesPurchases() {
    this.ELEMENT_DATA = [];
    Array.prototype.forEach.call(this.purchases, fullPurchase => {
      const obj: PurchaseDisplay = {
        Order: fullPurchase._id,
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
