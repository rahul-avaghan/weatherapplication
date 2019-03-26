import { Component, OnInit, Inject, Input } from '@angular/core';
import { Detailsdialogdata } from './detailsdialogdata';
import { MAT_DIALOG_DATA } from '@angular/material';
import { WeatherInfo } from 'src/app/shared/Models/weatherinfo';

@Component({
  selector: 'app-detailsmodal',
  templateUrl: './detailsmodal.component.html',
  styleUrls: ['./detailsmodal.component.scss']
})
export class DetailsmodalComponent implements OnInit {
   /*Weather Information */
  weatherInfo: WeatherInfo;

  /*Inject the required data for showing modal. */
  constructor(@Inject(MAT_DIALOG_DATA) public data: Detailsdialogdata) { }
  /**
   * On initialisation set the injected data.
   */
  ngOnInit() {
    this.weatherInfo = this.data.weatherInfo;
  }

}
