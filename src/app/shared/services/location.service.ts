import { Injectable } from '@angular/core';
import { City } from '../Models/city';
import { of, Observable } from 'rxjs';

@Injectable()
export class LocationService {
  /** Pre configured cities */
  cities = [
    {
      id: 2988507,
      name: 'paris',
      country: 'FR'
    },
    {
      id: 2759794,
      name: 'amsterdam',
      country: 'NL'
    },
    {
      id: 3067696,
      name: 'prague',
      country: 'CZ'
    },
    {
      id: 6058560,
      name: 'london',
      country: 'GB'
    },
    {
      id: 2950159,
      name: 'berlin',
      country: 'DE'
    }
  ];
  constructor() { }

  /** Get name of the city */
  getCityByName(name: string): City {
    return this.cities.find(city => city.name.toLowerCase() === name.toLowerCase());
  }

  /** Get List of the cities */
  getListofCities(): Observable<Array<City>> {
    return of(this.cities);
  }
}
