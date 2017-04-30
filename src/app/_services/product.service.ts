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
            .map((resp) => {
                if (resp.json) {
                    resp = resp.json();

                    return resp['CatalogEntryView'] ? resp['CatalogEntryView'] : {};
                } else {
                    return {};
                }
            })
            .toPromise();
    }
}
