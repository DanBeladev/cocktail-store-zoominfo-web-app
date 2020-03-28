import { Injectable } from '@angular/core';
import { Product } from 'src/app/api/models/types';
import { User, Purchase } from '../api/models/types';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PayPalService {
  public product: Product;

  constructor(public http: HttpClient) {}

  transactionCompleted = data => {
    const { payer } = data;
    const { purchase_units = []} = data || {};
    const shipping = (purchase_units[0] || {}).shipping;
    const payerAddress = `${shipping.address.address_line_1} ${shipping.address.address_line_2}
      ${shipping.address.address_line_3} ${shipping.address.country_code}`;

    const userDetails: User = {
      _id: payer.payer_id,
      name: `${payer.name.given_name}  ${payer.name.surname}`,
      address: payerAddress,
      emailAddress: payer.email_address,
      phoneNumber: payer.phone.phone_number.national_number
    };

    const cocktail: Product = this.product;
    const purchase: Purchase = {
      _id: data.id,
      createdDate: data.create_time,
      status: data.status,
      product: cocktail,
      user: userDetails
    };

    this.http
      .post<Purchase>(environment.API_URL + '/purchases', purchase)
      .subscribe(purchases => {
        console.log('purchases after post request: ', purchases);
      });

  }
}
