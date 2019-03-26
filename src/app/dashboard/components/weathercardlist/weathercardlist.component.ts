import { Component, OnInit } from '@angular/core';
import { WeatherInfo } from 'src/app/shared/Models/weatherinfo';
import { City } from 'src/app/shared/Models/city';
import { LocationService } from 'src/app/shared/services/location.service';
import { WeatherinfoService } from 'src/app/shared/services/weatherinfo.service';


@Component({
  selector: 'app-weathercardlist',
  templateUrl: './weathercardlist.component.html',
  styleUrls: ['./weathercardlist.component.scss']
})
export class WeathercardlistComponent implements OnInit {
  /** Cities information */
  cities: Array<City>;
  /** Weather information list */
  weatherInfoList: Array<WeatherInfo>;

  constructor(private localtionService: LocationService, private weatherInfoService: WeatherinfoService) { }

  ngOnInit() {
    this.fetchWeatherInformationforCities();
  }
  /** Fetchs the city information and Gets the weather information from openweathermap.org API. */
  fetchWeatherInformationforCities(): void {
    this.localtionService.getListofCities().subscribe(cities => {
      this.weatherInfoService.getWeatherByCities(cities.map(t => t.id))
        .subscribe(weatherInfoList => {
          this.weatherInfoList = weatherInfoList;
        });
    });
  }
}
