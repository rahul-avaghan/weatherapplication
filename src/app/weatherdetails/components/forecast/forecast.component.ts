import { Component, OnInit, Input } from '@angular/core';
import { ForecastService } from '../../services/forecast.service';
import { LocationService } from 'src/app/shared/services/location.service';
import { Forecast } from '../../models/forecast';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

  /**
   * Take city name as input parameter.
   */
  @Input()
  cityName: string;
  /*Array for forecast */
  forecastData: any[];
  /** Width and height for the chart */
  view: any[] = [600, 200];
  /** Color formatting for chart */
  colorScheme = { domain: ['#ffff', '#ffff', '#ffff', '#ffff'] };
  
  /** Formatter to show only hours */
  xAxisTickFormatting = (name: string | number | Date) => `${new Date(name).getHours()}:00`;

  /*
   *  Inject required services.
  */
  constructor(private foreCastService: ForecastService, private locationService: LocationService) { }

  /*On initialization apply chart data.
   */
  ngOnInit() {
    this.getAndApplyForeCast(this.cityName);
  }

  /** Get the forecast information for city.
   *  @param City name to be whoes forecast to be shown.
   *  @returns It returns the chart
   */
  getAndApplyForeCast(cityName: string) {
    this.foreCastService
      .getForecastByCity(this.locationService.getCityByName(cityName).id)
      .subscribe(data => this.setChartData(data));
  }

  /**
   * To set data for chart.
   * @param forecastData : Array of forecast information with respect to time.
   * @returns Returns the array of name and value required for chart.
   */
  setChartData(forecastData: Array<Forecast>): any {
    this.forecastData = [{
      name: 'Tempreture',
      series: forecastData.map(info => {
        return {
          name: info.datetime,
          value: info.tempreture
        };
      }).slice(0, 9)
    }];
  }
}
