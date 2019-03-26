import { City } from './city';
/** Weather information provided by https://openweathermap.org website. */
export class WeatherInfo {
    constructor(city: City, windSpeed: string, WetherStatus: string, tempreture: number, pressure: number) {
        this.city = city;
        this.weatherStatus = this.weatherStatus;
        this.windSpeed = windSpeed;
        this.tempreture = Math.ceil(tempreture);
        this.pressure = pressure;
    }
    /* City for which information is required .*/
    city: City;

    /* Wind speed .*/
    windSpeed: string;

    /* Weather status rainy or snowy etc.*/
    weatherStatus: string;

    /* Average tempreature.*/
    tempreture: number;

    /* Average Pressure .*/
    pressure: number;
}
