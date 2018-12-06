import { Component, OnInit, ElementRef, ViewChild, OnChanges } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  @ViewChild("slider") slider: ElementRef;

  // private items;
  public donationAmount = 50;
  private componentDisplay = Math.random();
  public sliderColour = '';

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    // this.items = this.db.collection('items').valueChanges();
    // console.log(this.items)
  }

  adjustStyles(value) {
    switch (value) {
      case 10:
        this.slider.nativeElement.style.backgroundColor = '#663300';
        break;
      case 20:
        this.slider.nativeElement.style.backgroundColor = '#663300';
        break;
      case 30:
        this.slider.nativeElement.style.backgroundColor =  '#996633';
        break;
      case 40:
        this.slider.nativeElement.style.backgroundColor =  '#996633';
        break;
      case 50:
        this.slider.nativeElement.style.backgroundColor =  '#66cc00';
        break;
      case 60:
        this.slider.nativeElement.style.backgroundColor =  '#66cc00';
        break;
      case 70:
        this.slider.nativeElement.style.backgroundColor =  '#00cc66';
        break;
      case 80:
        this.slider.nativeElement.style.backgroundColor =  '#00cc66';
        break;
      case 90:
        this.slider.nativeElement.style.backgroundColor =  '##00cccc';
        break;
      case 100:
        this.slider.nativeElement.style.backgroundColor =  '#5ECFE6';
        break;
      default:
        break;
    }
  }

  trashAmount() {
    return Math.round(this.donationAmount * 0.35);
  }

  slider() {
    return this.componentDisplay > 0.5;
  }

  checkmarks() {
    return !this.slider();
  }

  donate() {
    console.log('donationAmount', this.donationAmount)
    this.db.collection("donations").doc(uuid()).set({
      amount: +this.donationAmount,
      timestamp: Date.now(),
      page_type: this.slider() ? 'slider' : 'checkmarks'
    })
    .then(function() {
      console.log("Document successfully written!");
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
  }
}
