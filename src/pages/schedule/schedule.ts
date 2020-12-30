import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DatosProvider } from '../../providers/datos/datos';
import { MylistPage } from '../mylist/mylist';

/**
 * Generated class for the SchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
})
export class SchedulePage {

  constructor(public jcaProveedor: DatosProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchedulePage');
  }

	openMyList() {
		this.navCtrl.push(MylistPage);
	}
}
