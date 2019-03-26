import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { WeathercardComponent } from './components/weathercard/weathercard.component';
import { WeathercardlistComponent } from './components/weathercardlist/weathercardlist.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { WeatherdetailsModule } from '../weatherdetails/weatherdetails.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    MaterialModule,
    RouterModule,
    SharedModule,
    WeatherdetailsModule
  ],
  declarations: [
    DashboardComponent,
    WeathercardComponent,
    WeathercardlistComponent
  ],
  providers: []
})
export class DashboardModule { }
