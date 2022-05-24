import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-filter',
  templateUrl: './admin-filter.component.html',
  styleUrls: ['./admin-filter.component.css']
})
export class AdminFilterComponent implements OnInit {
  searchText: any;
  stations = [{ id: 1, name: "Olympiades", lift: "", escalator: "", callterminal: "", porte: "", line: "" },
  { id: 2, name: "Bibliothèque F.M", lift: "", escalator: "", callterminal: " " },
  { id: 3, name: "Cour Saint-Emillion", lift: "", escalator: "", callterminal: "" },
  { id: 4, name: "Bibliothèques Francois Mitterand", lift: "", escalator: "", callterminal: "" },
  { id: 5, name: "Bercy", lift: "", escalator: "", callterminal: "" },
  { id: 6, name: "Chatêlet", lift: "", escalator: "", callterminal: "" },
  { id: 7, name: "Pyramides", lift: "", escalator: "", callterminal: "" },
  { id: 8, name: "Madeleine", lift: "", escalator: "", callterminal: "" },
  { id: 9, name: "Saint-Lazare", lift: "", escalator: "", callterminal: " " },
  { id: 10, name: "Poncardinet", lift: "", escalator: "", callterminal: "" },
  { id: 11, name: "Porte de Clichy", lift: "", escalator: "", callterminal: "" },
  { id: 12, name: "Saint-Ouen", lift: "", escalator: "", callterminal: "" },
  { id: 13, name: "Mairie de Saint Ouen", lift: "", escalator: "", callterminal: "" },
  { id: 14, name: "Chaussée d'An", lift: "", escalator: "", callterminal: "" },
  ];
  searchText2: any;
  stations1 = [{ id: 15, name: 'Miromesnil', lift: "", escalator: "", callTerminal: "", porte: "", line: "" },
  ];

  constructor() { }

  ngOnInit(): void {
    console.log("");
  }

}
