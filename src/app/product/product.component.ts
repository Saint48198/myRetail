import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../_interfaces';
import { ProductService } from '../_services';

@Component({
    selector: 'product',
    styleUrls: ['./_product.component.scss'],
    templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {

    private product: Product;

    constructor(
        public route: ActivatedRoute,
        private _productSvc: ProductService
    ) {}

    public ngOnInit() {
        this.route
            .data
            .subscribe((data: any) => {
                this._productSvc.getProduct().then((resp: Product[]) => {
                    if (resp.length === 1) {
                        this.product = resp[0];
                    }

                    console.log(this.product);
                }).catch((error: any) => {
                    console.log(error);
                });
            });
    }

}
