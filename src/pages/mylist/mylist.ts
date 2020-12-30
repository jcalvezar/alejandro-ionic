import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DatosProvider } from '../../providers/datos/datos';

/**
 * Generated class for the MylistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-mylist',
  templateUrl: 'mylist.html',
})
export class MylistPage {
	
  constructor(public jcaProveedor: DatosProvider, public navCtrl: NavController, public navParams: NavParams) {
		console.log('Hola');
		console.log(jcaProveedor.fechas);
		
		jcaProveedor.fechas.forEach( item => {
			console.log('Fecha: ',item);
		});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MylistPage');
  }

}
