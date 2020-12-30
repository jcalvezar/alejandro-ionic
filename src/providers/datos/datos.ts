import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { JCA_carta, JCA_fecha, JCA_evento } from '../../models/models';

/*
  Generated class for the DatosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatosProvider {

	cartas: JCA_carta[] = [];
	fechas: JCA_fecha[] = [];
	eventos: JCA_evento[] = [];
	hoy: Date;
	days: string[];
	
  constructor(public http: HttpClient) {
    console.log('Hello DatosProvider Provider');
		
		this.hoy = new Date();
		
		this.setCartas();
		this.setFechas();
		this.setEventos();
  }
	
	setCartas() {
		this.cartas = [
			{ icono: 'list-box', titulo: 'All tasks', texto: 'En el 4B', cantidad: 20 },
			{ icono: 'person', titulo: 'Personal', texto: 'Regatas vs Cune', cantidad: 100 },
			{ icono: 'clipboard', titulo: 'Work', texto: 'Salidas a Pescar', cantidad: 100 },
			{ icono: 'bulb', titulo: 'Ideas', texto: 'Salidas a tomar un Cafe', cantidad: 1000 },
			{ icono: 'color-palette', titulo: 'Artwork', texto: 'La Llama que Llama', cantidad: 42 },
			{ icono: 'warning', titulo: 'Urgently', texto: 'Ir de Compras', cantidad: 2 }
		];
	}
	
	setFechas() {
		this.days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
		
		var d = new Date();
		d.setDate(d.getDate() - 4);
		
		for(var i=1; i < 31; i++) {
			var dia = { unix: +d, nro: d.getDate(), dia: this.days[d.getDay()], color: 'light' };
			if (this.hoy.getFullYear() === d.getFullYear() && this.hoy.getMonth() === d.getMonth() && this.hoy.getDate() === d.getDate()) dia.color = 'secondary';
			
			this.fechas.push( dia);
			d.setDate(d.getDate() + 1);
		}
	}

	setEventos() {
		this.eventos = [
			{ hora: '08:00', icono: 'person', titulo: 'Morning Run in the Park', texto: 'Mon - Fri' },
			{ hora: '10:00', icono: 'clipboard', titulo: 'Skype Meeteing with the NY Contractor', texto: 'Delivery Overview' },
			{ hora: '11:00', icono: 'clipboard', titulo: 'Meeting with the Design team', texto: 'Timeline Q1 Visualization Project Objectives' },
			{ hora: '12:00', icono: 'clipboard', titulo: 'Weekly Meeting with the Team', texto: 'On the List of Issues' },
			{ hora: '16:00', icono: 'person', titulo: 'Morning Run in the Park', texto: 'Mon - Fri' },
			{ hora: '17:00', icono: 'clipboard', titulo: 'Skype Meeteing with the NY Contractor', texto: 'Delivery Overview' },
			{ hora: '18:00', icono: 'clipboard', titulo: 'Meeting with the Design team', texto: 'Timeline Q1 Visualization Project Objectives' },
			{ hora: '20:00', icono: 'clipboard', titulo: 'Weekly Meeting with the Team', texto: 'On the List of Issues' }
		];
	}
}
