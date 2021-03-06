import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss']
})
export class ReceiptComponent implements OnInit {
  public paypalLink;
  private amount;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.amount = params['amount'];
      if (this.amount) {
        this.paypalLink = 'https://www.paypal.me/TaraSMatthews/' + this.amount;
      }
    });

    console.log('this.paypalLink', this.paypalLink)
  }

}
