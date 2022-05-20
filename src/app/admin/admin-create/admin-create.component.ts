import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Station } from 'src/app/models/station';
import { StationService } from 'src/app/services/station.service';
 
@Component({
  selector: 'app-admin-create',
  templateUrl: './admin-create.component.html',
  styleUrls: ['./admin-create.component.css'],
})
export class AdminCreateComponent implements OnInit {
  public newStationForm!: FormGroup;
  constructor(private fb: FormBuilder,private stationService:StationService,private router:Router) { }

  ngOnInit(): void {
    this.newStationForm = this.fb.group({
      name: ['', Validators.required],
      lift: [true, [Validators.required]],
      escalator: [false, Validators.required],
      callTerminal: [false, Validators.required],
    });
  }
  onSubmitForm() {
    console.log(this.newStationForm.value);
    const newStation = new Station(
      this.newStationForm.value.name,
      this.newStationForm.value.lift,
      this.newStationForm.value.escalator,
      this.newStationForm.value.callTerminal
    );
    console.log(newStation);
    this.stationService.createNewStation(newStation).subscribe(() => {
      console.log("Le pays a été créé  avec succès!!!");
      this.router.navigateByUrl('/admin-crud');
    });
  }
}
