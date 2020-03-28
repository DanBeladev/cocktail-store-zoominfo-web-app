import { Component, OnInit, Inject } from '@angular/core';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { Product } from 'src/app/api/models/types';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { PayPalService } from 'src/app/services/pay-pal.service';

@Component({
  selector: 'app-paypalcomponent',
  templateUrl: './paypalcomponent.component.html',
  styleUrls: ['./paypalcomponent.component.css']
})
export class PaypalcomponentComponent implements OnInit {
  public payPalConfig?: IPayPalConfig;
  private snackbarConfig = new MatSnackBarConfig();

  public product: Product = this.paypalService.product;
  constructor(
    public paypalService: PayPalService,
    public dialogRef: MatDialogRef<PaypalcomponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.initConfig();
    this.initSnackbarConfig();
  }

  private initConfig(): void {
    this.payPalConfig = {
      currency: 'USD',
      clientId: 'sb',
      createOrderOnClient: data =>
        ({
          intent: 'CAPTURE',
          purchase_units: [
            {
              amount: {
                currency_code: 'USD',
                value: this.product.price,
                breakdown: {
                  item_total: {
                    currency_code: 'USD',
                    value: this.product.price
                  }
                }
              },
              items: [
                {
                  name: this.product.title,
                  quantity: '1',
                  category: 'DIGITAL_GOODS',
                  unit_amount: {
                    currency_code: 'USD',
                    value: this.product.price
                  }
                }
              ]
            }
          ]
        } as ICreateOrderRequest),
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical',
        color: 'gold',
        size: 'responsive'
      },
      onApprove: (data, actions) => {
        console.log(data, actions);
        actions.order.get().then(details => {
          console.log(details);
        });
      },
      onClientAuthorization: data => {
        this.paypalService.transactionCompleted(data);
        this.dialogRef.close();
        this.snackbarConfig.panelClass = ['confirm-class'];
        this.snackBar.open(
          'Transaction Completed Successfully',
          'Close',
          this.snackbarConfig
        );
      },
      onCancel: (data, actions) => {
        this.handleNotCompletedTeansaction();
        console.log('OnCancel', data, actions);
      },
      onError: err => {
        this.handleNotCompletedTeansaction();
        console.log('OnError', err);
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      }
    };
  }

  onCloseModal(): void {
    this.dialogRef.close();
  }

  handleNotCompletedTeansaction(): void {
    this.dialogRef.close();
    this.snackbarConfig.panelClass = ['cancell-class'];
    this.snackBar.open(
      'Transaction has been Cancelled',
      'Close',
      this.snackbarConfig
    );
  }

  initSnackbarConfig = () => {
    this.snackbarConfig.duration = 5000;
    this.snackbarConfig.verticalPosition = 'top';
    this.snackbarConfig.horizontalPosition = 'center';
  }
}
