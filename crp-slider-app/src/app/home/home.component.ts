import { Component, OnInit, ElementRef, ViewChild, OnChanges } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  @ViewChild("slider") sliderEl: ElementRef;
  @ViewChild("amount") amount: ElementRef;

  // private items;
  public donationAmount = 15;
  private componentDisplay = Math.random();
  public sliderColour = '';

  constructor(
    private db: AngularFirestore,
    private router: Router) { }

  ngOnInit() {
    // this.items = this.db.collection('items').valueChanges();
    // console.log(this.items)
  }

  adjustStyles(value) {
    if (value <= 5) {
      this.sliderEl.nativeElement.style.backgroundColor = '#663300';
    } else if (value > 5 && value <= 10) {
      this.sliderEl.nativeElement.style.backgroundColor = '#996633';
    } else if (value > 10 && value <= 15) {
      this.sliderEl.nativeElement.style.backgroundColor = '#66cc00';
    } else if (value > 15 && value <= 20) {
      this.sliderEl.nativeElement.style.backgroundColor = '#00cc66';
    } else {
      this.sliderEl.nativeElement.style.backgroundColor = '#5ECFE6';
    }
  }

  trashAmount() {
    return Math.round(this.donationAmount * 2);
  }

  slider() {
    return this.componentDisplay > 0.5;
  }

  checkboxes() {
    return !this.slider();
  }

  donate() {
    var now = new Date;
    this.db.collection("donations").doc(""+now.getTime()).set({
      amount: +this.donationAmount,
      timestamp: now.toUTCString(),
      page_type: this.slider() ? 'slider' : 'checkmarks'
    })
    .then(function() {
      console.log("Document successfully written!");
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });

    const params = {};
    params['amount'] = this.donationAmount;
    this.router.navigate(['receipt'], { queryParams: params });
  }
}
