import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { StartComponent } from './start/start.component';
import { LogoComponent } from './logo/logo.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent, pathMatch: 'full'},
  {path: 'start', component: StartComponent},
  {path: 'logo', component: LogoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
