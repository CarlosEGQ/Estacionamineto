import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parking-lot',
  templateUrl: './parking-lot.component.html',
  styleUrls: ['./parking-lot.component.css']
})
export class ParkingLotComponent implements OnInit {

  constructor() { }

  EstacionNo1:boolean = true;
  EstacionNo2:boolean = false;
  EstacionNo3:boolean = true;

  ngOnInit(): void {
  }

  cambio(numero){
    if(numero == 1){
      this.EstacionNo1 = !this.EstacionNo1;
    }
    else if(numero == 2){
      this.EstacionNo2 = !this.EstacionNo2;
    }
    else{
      this.EstacionNo3 = !this.EstacionNo3;
    }
  }
}
