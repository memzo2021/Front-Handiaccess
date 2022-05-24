import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AdminFilterComponent } from './admin/admin-filter/admin-filter.component';
import { AdminSignUpComponent } from './admin/admin-sign-up/admin-sign-up.component';
import { AdminSignInComponent } from './admin/admin-sign-in/admin-sign-in.component';
import { NotFoundComponent } from './pages/not-found/not-found/not-found.component';
import { AdminStationsComponent } from './admin/admin-stations/admin-stations.component';
import { AdminCreateComponent } from './admin/admin-create/admin-create.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminCrudComponent } from './admin/admin-crud/admin-crud.component';
import { AdminUpdateComponent } from './admin/admin-update/admin-update.component';


const routes: Routes = [
  { path: 'accueil', component: AcceuilComponent },
  { path: 'admin', component: AdminSignUpComponent },
  { path: 'admin-update/:id-update', canActivate: [AuthGuard], component:AdminUpdateComponent},

  { path: 'app-create', canActivate: [AuthGuard], component: AdminCreateComponent },
  { path: 'app-admin-filter', component: AdminFilterComponent },
   { path: 'app-my-stations', component: AdminStationsComponent },
  { path: 'app-sign-in', component: AdminSignInComponent },
  { path: 'admin-crud', canActivate: [AuthGuard], component:AdminCrudComponent},
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
