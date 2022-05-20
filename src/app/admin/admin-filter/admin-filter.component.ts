import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-filter',
  templateUrl: './admin-filter.component.html',
  styleUrls: ['./admin-filter.component.css']
})
export class AdminFilterComponent implements OnInit {
  searchText: any;
  stations = [{ id: 1, name: "Olympiades", lift: "True", escalator: "False", callterminal: "True " },
    { id: 2, name: "Richelieu-Drouot", lift: "False", escalator: "False", callterminal: "True" },
    { id: 3, name: "Mairie de Montreuil", lift: "True", escalator: "False", callterminal: "False" },
  { id: 4, name: "Bibliothèques Francois Mitterand", lift: "True", escalator: "True", callterminal: "True" },
  { id: 5, name: "Cour Saint-Emillion", lift: "True", escalator: "False", callterminal: "True" },
  { id: 6, name: "Bercy", lift: "True", escalator: "True", callterminal: "True" },
  { id: 7, name: "Gare de Lyon", lift: "True", escalator: "True", callterminal: "True" },
  { id: 8, name: "Chatêlet", lift: "True", escalator: "True", callterminal: "True" },
  { id: 9, name: "Pyramides", lift: "False", escalator: "True", callterminal: "True" },
  { id: 10, name: "Madeleine", lift: "True", escalator: "True", callterminal: "True" },
  { id: 11, name: "Saint-Lazare", lift: "True", escalator: "True", callterminal: "True " },
  { id: 12, name: "Poncardinet", lift: "False", escalator: "False", callterminal: "True" },
  { id: 13, name: "Porte de Clichy", lift: "True", escalator: "False", callterminal: "True" },
  { id: 14, name: "Saint-Ouen", lift: "True", escalator: "True", callterminal: "True" },
  { id: 15, name: "jasmine", lift: "False", escalator: "False", callterminal: "True" },
  { id: 16, name: "Franklin D Roosevlet", lift: "True", escalator: "False", callterminal: "True" },
  { id: 17, name: "Saint-Ambroise", lift: "False", escalator: "False", callterminal: "True" },
  { id: 18, name: "Voltaire", lift: "False", escalator: "False", callterminal: "True" },
  { id: 19, name: "Mairie des Lillas", lift: "False", escalator: "False", callterminal: "False" },

  { id: 20, name: "Havre-Caumartin", lift: "False", escalator: "False", callterminal: "True" }];

  constructor() { }

  ngOnInit(): void {
    console.log("");
  }

}
