import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Product } from '../_interfaces';
import { ProductService } from '../_services';

@Component({
    selector: 'product',
    styleUrls: ['./_product.component.scss'],
    templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {

    public product: Product = new Product();
    public images: Object[] = [];

    constructor(
        private _route: ActivatedRoute,
        private _productSvc: ProductService
    ) {}

    public ngOnInit() {
        this._route.params.switchMap((params: Params) => {
            return this._productSvc.getProduct();
        }).subscribe((resp: Product[]) => {
            if (resp.length === 1) {
                this.product = resp[0];

                this.images = this.product.Images[0]['PrimaryImage'].concat(this.product.Images[0]['AlternateImages']);
            }
        });
    }

}
