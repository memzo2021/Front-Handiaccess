import { Component, OnInit } from '@angular/core';
import { Station } from 'src/app/models/station';
import { StationService } from 'src/app/services/station.service';
@Component({
  selector: 'admin-crud',
  templateUrl: './admin-crud.component.html',
  styleUrls: ['./admin-crud.component.css']
})
export class AdminCrudComponent implements OnInit {

  public listStations!: Station[];

  constructor(private stationService: StationService) { }

  ngOnInit(): void {
    this.stationService.getAllAdminStations().subscribe((resp) => {
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
           
          this.listStations = this.listStations.filter(station =>station.id !== stationId);
        },
        error: (err) => { console.error(err) }
      })
    }
  }

}
