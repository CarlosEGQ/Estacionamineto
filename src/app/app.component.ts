import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	constructor() {

	}

	ngOnInit() {
	}

	// variables para mostrar cosas

	Logeado: boolean;
	Admin: boolean;

	logout() {
		localStorage.clear();
		location.reload();
	}

}

