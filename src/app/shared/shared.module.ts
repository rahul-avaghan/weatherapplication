import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherinfoService } from './services/weatherinfo.service';
import { LocationService } from './services/location.service';
import { City } from './Models/city';
import { WeatherInfo } from './Models/weatherinfo';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [{ provide: City }, { provide: WeatherInfo }],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [WeatherinfoService, LocationService]
    };
  }
}
