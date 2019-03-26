import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Forecast } from '../models/forecast';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { baseUrl, appid } from 'src/global';

@Injectable()
export class ForecastService {

  constructor(private http: HttpClient) { }
  /** End point name */


  /** Get forecast data. */
  getForecastByCity(cityId: number): Observable<Array<Forecast>> {
    const endpoint = `${baseUrl}forecast?id=${cityId}&units=metric&appid=${appid}`;
    return this.http
      .get(endpoint)
      .pipe(map(x => this.mapToForecast(x), take(5)));
  }
 /** To map the raw object */
  private mapToForecast(rawWeatherInfo: any): Array<Forecast> {
    return rawWeatherInfo.list.map(info => new Forecast(info.dt_txt, info.main.temp));
  }
}
