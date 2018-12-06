import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

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

}
