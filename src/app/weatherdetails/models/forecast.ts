export class Forecast {
    constructor(datetime: string, tempreture: string) {
        this.datetime = new Date(datetime).toJSON();
        this.tempreture = tempreture;
    }
    datetime: string;
    tempreture: string;
}
