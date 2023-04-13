import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  title = 'Google Payment';

  constructor() { }

  ngOnInit(): void {
  }

  onLoadPaymentData = (event: Event): void =>{
    const eventDetail = event as CustomEvent<google.payments.api.PaymentData>;
    console.log('load payment data', eventDetail.detail);
  }

  onPaymentDataAuthorized: google.payments.api.PaymentAuthorizedHandler = (paymentData) =>{
      console.log('payment authorized', paymentData);
      return {
        transactionState: 'SUCCESS'
    };
  }
}
