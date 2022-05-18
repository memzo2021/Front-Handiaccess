import { Component } from '@angular/core';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent {
  listeStation: any[];

  constructor() { 
    this.listeStation = [];
  }

  ajoutStation(form: any) {
    console.log(form.value.depart)
    
  }
}
