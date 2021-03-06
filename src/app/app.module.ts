import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatButtonModule, MatCardModule, MatIconModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BaseComponent } from './base/base.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { StartComponent } from './start/start.component';
import { LogoComponent } from './logo/logo.component';
import { QuestionComponent } from './question/question.component';
import { EmployeesComponent } from './employees/employees.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { TireComponent } from './tire/tire.component';
import { EndComponent } from './end/end.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    WelcomeComponent,
    StartComponent,
    LogoComponent,
    QuestionComponent,
    EmployeesComponent,
    VehicleComponent,
    TireComponent,
    EndComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
