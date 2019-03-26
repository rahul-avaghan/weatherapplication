import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { ChartsModule } from 'ng2-charts';
import { ForecastComponent } from './components/forecast/forecast.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ForecastService } from './services/forecast.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { MetadataComponent } from './components/metadata/metadata.component';
import { DetailsmodalComponent } from './components/detailsmodal/detailsmodal.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ChartsModule,
    NgxChartsModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: [
    ForecastComponent,
    MetadataComponent,
    DetailsmodalComponent
  ],
  providers: [ForecastService],
  entryComponents: [DetailsmodalComponent],
  exports: [DetailsmodalComponent]
})
export class WeatherdetailsModule { }
