export class Config {

    private urlApi: string;

    constructor() {
        this.urlApi = 'http://localhost:3000';
    }

    getUrlApi(): string {
        return this.urlApi;
    }

}
