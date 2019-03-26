import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SharedModule } from './shared/shared.module';
import { City } from './shared/Models/city';
import { WeatherInfo } from './shared/Models/weatherinfo';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    SharedModule,
    SharedModule.forRoot()
  ],
  providers: [{ provide: City }, { provide: WeatherInfo }],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
