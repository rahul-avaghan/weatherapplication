
/** Mapper for city object sent by https://openweathermap.org website */
export class City {
    /** To inialize the City object */
    constructor(id: number, name: string, country: string) {
        this.id = id;
        this.name = name;
        this.country = country;
    }
    /* Id of the city provided in https://openweathermap.org website */
    id: number;
    /* Name of the city provided in https://openweathermap.org website */
    name: string;
    /* Country of the city provided in https://openweathermap.org website */
    country: string;
}
