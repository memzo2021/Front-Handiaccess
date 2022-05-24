import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Station } from '../models/station';


@Injectable({
  providedIn: 'root'
})
export class StationService {
  private urlApi: string;

  constructor(private http: HttpClient) {
    this.urlApi = 'http://localhost:8080';
  }
  createNewStation(newStation: Station) {
    const token = localStorage.getItem("token");

    return this.http.post(
      `${this.urlApi}/stations`,
      newStation,
      { headers: { Authorization: `Bearer ${token}` } }

    )
  }

  getAllStations(): Observable<Station[]> {
    const token = localStorage.getItem("token");

    return this.http.get<Station[]>(`${this.urlApi}/stations/names`,//todo
      { headers: { Authorization: `Bearer ${token}` } }
    )
  }

  getStationById(stationId: string): Observable<Station> {
    const token = localStorage.getItem("token");

    return this.http.get<Station>(`${this.urlApi}/stations/${stationId}`,//todo
      { headers: { Authorization: `Bearer ${token}` } }
    )
  }

  updateStation(station: Station): Observable<any> {
    const token = localStorage.getItem("token");

    const body = {
      name: station.name,
      lift: station.lift,
      escalator: station.escalator,
      callTerminal: station.callTerminal
    }

    return this.http.put<any>(`${this.urlApi}/stations/${station.id}`,
      body,
      { headers: { Authorization: `Bearer ${token}` } }
    )
  }
  // getStationUpdate(): Observable<Station[]>{
  //   const token = localStorage.getItem("token");
  //   return this.http.get<Station[]>(`${this.urlApi}/stations/`,
  //   { headers: { Authorization: `Bearer ${token}` } })
  
  // }





  deleteStation(stationId: string) {
    const token = localStorage.getItem("token");

    return this.http.delete(`${this.urlApi}/stations/${stationId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
  }


}
