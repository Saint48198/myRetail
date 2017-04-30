import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx'; // used for providing the toPromise function

import { Product } from '../_interfaces';

@Injectable()
export class ProductService {
    private url: string = '../assets/mock-data/item-data.json';

    constructor(private http: Http) {
    }

    public getProduct(): Promise<Product[]> {
        return this.http.get(this.url)
            .toPromise()
            .then((resp)  => resp.json() as Product[])
            .catch(this.handleError);
    }

    private handleError (error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}
