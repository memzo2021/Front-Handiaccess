import { Component, OnInit } from '@angular/core';
import { StationService } from 'src/app/services/station.service';
import { Station } from 'src/app/models/station';
 @Component({
  selector: 'app-admin-stations',
  templateUrl: './admin-stations.component.html',
  styleUrls: ['./admin-stations.component.css']
})
export class AdminStationsComponent implements OnInit {
   public listStations!: Station[];
   check: boolean = true;

  constructor(private stationService: StationService) { }

  ngOnInit(): void {
    this.stationService.getAllStations().subscribe((resp) => {
      console.log(resp);
      this.listStations = resp;

    })
  }

}



