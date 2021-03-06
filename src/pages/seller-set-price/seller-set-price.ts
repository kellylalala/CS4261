import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SellerConfirmation } from '../seller-confirmation/seller-confirmation';


@Component({
  templateUrl: 'seller-set-price.html'
})
export class SellerSetPrice {
  form = {
    condition: '',
    markings: '',
    price: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onSubmit() {
    this.navCtrl.push(SellerConfirmation, {
      book: this.navParams.get('book'),
      course: this.navParams.get('course'),
      instructor: this.navParams.get('instructor'),
      semester: this.navParams.get('semester'),
      priceForm: this.form});
  }
}
