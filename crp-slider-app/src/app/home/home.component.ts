import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  // private items;
  public donationAmount = 50;
  public componentDisplay = 1;

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    // this.items = this.db.collection('items').valueChanges();
    // console.log(this.items)
  }

  trashAmount() {
    return Math.round(this.donationAmount * 0.35);
  }

  donate() {
    console.log('donationAmount', this.donationAmount)
    this.db.collection("donations").doc(uuid()).set({
      amount: this.donationAmount,
      timestamp: Date.now(),
      page_type: 'slider'
    })
    .then(function() {
      console.log("Document successfully written!");
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
  }
}
