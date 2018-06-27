import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HELLO } from '../../../../shared';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  hello = HELLO;
  constructor(public navCtrl: NavController) {

  }

}
