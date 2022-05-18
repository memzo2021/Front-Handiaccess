import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-filter',
  templateUrl: './admin-filter.component.html',
  styleUrls: ['./admin-filter.component.css']
})
export class AdminFilterComponent implements OnInit {
  searchText: any;
  stations = [{ id: 1, name: "Olympiades", lift: "True", escalator: "True", callterminal: "True" },
  { id: 2, name: "Bibliothèques Francois Mitterand", lift: "True", escalator: "True", callterminal: "True" },
  { id: 3, name: "Cour Saint-Emillion", lift: "True", escalator: "True", callterminal: "True" },
  { id: 4, name: "Bercy", lift: "True", escalator: "True", callterminal: "True" },
  { id: 5, name: "Gare de Lyon", lift: "True", escalator: "True", callterminal: "True" },
  { id: 6, name: "Chatêlet", lift: "True", escalator: "True", callterminal: "True" },
  { id: 7, name: "Pyramides", lift: "True", escalator: "True", callterminal: "True" },
  { id: 8, name: "Madeleine", lift: "True", escalator: "True", callterminal: "True" },
  { id: 9, name: "Saint-Lazare", lift: "True", escalator: "True", callterminal: "True" },
  { id: 11, name: "Poncardinet", lift: "True", escalator: "True", callterminal: "True" },
  { id: 12, name: "Porte de Clichy", lift: "True", escalator: "True", callterminal: "True" },
  { id: 13, name: "Saint-Ouen", lift: "True", escalator: "True", callterminal: "True" },
  { id: 14, name: "Mairie de Saint-Ouen", lift: "True", escalator: "True", callterminal: "True" }];

  constructor() { }

  ngOnInit(): void {
    console.log("");
  }

}
