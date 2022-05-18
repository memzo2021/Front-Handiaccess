import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AdminSignUpComponent } from './admin/admin-sign-up/admin-sign-up.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AdminFilterComponent } from './admin/admin-filter/admin-filter.component';
import { AdminStationsComponent } from './admin/admin-stations/admin-stations.component';
import { NotFoundComponent } from './pages/not-found/not-found/not-found.component';
import { AdminSignInComponent } from './admin/admin-sign-in/admin-sign-in.component';
import { AdminCreateComponent } from './admin/admin-create/admin-create.component';
import { AdminCrudComponent } from './admin/admin-crud/admin-crud.component';
import { AdminUpdateComponent } from './admin/admin-update/admin-update.component';
 @NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    AdminSignUpComponent,
    NavbarComponent,
    AdminCreateComponent,
    AdminFilterComponent,
    AdminStationsComponent,
    NotFoundComponent,
    AdminSignInComponent,
    AdminCrudComponent,
    AdminUpdateComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
