import { Injectable } from '@angular/core';
import { WeatherInfo } from '../Models/weatherinfo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { City } from '../Models/city';
import { baseUrl, appid } from 'src/global';


@Injectable()
export class WeatherinfoService {

  constructor(private http: HttpClient) { }

  /** Get the weather information of the city.
   * @param City for which weather information needs to be fetched.
   * @returns Return the weather infomation of the city.
   */
  getWeatherByCity(city: City): Observable<WeatherInfo> {
    const endpoint = `${baseUrl}weather?q=${city.name},${city.country}&units=metric&appid=${appid}`;
    return this.http
      .get(endpoint)
      .pipe(map(info => this.mapToWeatherInfo(info)));
  }

  /** To fetch the weather by city ids.
   * @param Ids of the cities.
   * @returns Returns the Weather observable of Weather information.
   */
  getWeatherByCities(cityIds: Array<number>): Observable<Array<WeatherInfo>> {
    const endpoint = `${baseUrl}group?id=${cityIds.join(',')}&units=metric&appid=${appid}`;
    return this.http
      .get(endpoint)
      .pipe(
        map(x => this.mapToWeatherInfoList(x))
      );
  }
  /** To map the raw objet */
  private mapToWeatherInfoList(rawWeatherData: any): Array<WeatherInfo> {
    return rawWeatherData.list.map(info => {
      return new WeatherInfo(
        new City(info.id, info.name, info.sys.country),
        info.wind.speed,
        info.weather[0].main,
        info.main.temp,
        info.main.pressure);
    });
  }
  /** To map the raw objet */
  private mapToWeatherInfo(rawWeatherData: any): WeatherInfo {
    return new WeatherInfo(
      new City(rawWeatherData.id, rawWeatherData.name, rawWeatherData.sys.country),
      rawWeatherData.wind.speed,
      rawWeatherData.weather[0].main,
      rawWeatherData.main.temp,
      rawWeatherData.main.pressure);
  }
}
