import { Component, OnInit } from '@angular/core';
import { Station } from 'src/app/models/station';
import { StationService } from 'src/app/services/station.service';

@Component({
  selector: 'app-admin-filter',
  templateUrl: './admin-filter.component.html',
  styleUrls: ['./admin-filter.component.css']
})
export class AdminFilterComponent implements OnInit {
  searchText: any;

  public listStations!: Station[];

  constructor(private stationService: StationService) { }

  ngOnInit(): void {
    this.stationService.getAllStations().subscribe((resp) => {
      console.log(resp);
      this.listStations = resp;
    })
  }
  onClickDeleteStation(stationId: string | undefined) {
    console.log(stationId);
    if (stationId) {
      this.stationService.deleteStation(stationId).subscribe({
        next: (resp) => {
          console.log(resp);
           this.listStations = this.listStations.filter(station => station.id !== stationId);
        },
        error: (err) => { console.error(err) }
      })
    }
  }

}