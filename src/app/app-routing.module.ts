import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { StartComponent } from './start/start.component';
import { LogoComponent } from './logo/logo.component';
import { EmployeesComponent } from './employees/employees.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { TireComponent } from './tire/tire.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent, pathMatch: 'full' },
  { path: 'start', component: StartComponent },
  { path: 'logo', component: LogoComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'vehicle', component: VehicleComponent },
  { path: 'tire', component: TireComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
