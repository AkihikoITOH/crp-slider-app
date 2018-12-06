import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})

export class SliderComponent implements OnInit {
  private items;

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.items = this.db.collection('items').valueChanges();
    console.log(this.items)
  }

  donateDummy() {
    this.donate(100)
  }

  donate(amount: number) {
    this.db.collection("donations").doc(uuid()).set({
      amount: amount,
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
