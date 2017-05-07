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
    public returnMessage: string = '';

    constructor(
        private _route: ActivatedRoute,
        private _productSvc: ProductService
    ) {}

    public ngOnInit() {
        this._route.params.switchMap((params: Params) => { // could be used in future to get product id from url
            return this._productSvc.getProduct();
        }).subscribe((resp: Product[]) => {
            if (resp.length === 1) {
                this.product = resp[0];
                this.images = this.product.Images[0]['PrimaryImage'].concat(this.product.Images[0]['AlternateImages']);

                if (this.product.ReturnPolicy && this.product.ReturnPolicy.length) {
                    let returnPolicy = this.product.ReturnPolicy[0]['ReturnPolicyDetails'] ?
                        this.product.ReturnPolicy[0]['ReturnPolicyDetails'][0] : {};

                    this.returnMessage =  this.createReturnMsg(returnPolicy['policyDays'], returnPolicy['guestMessage']);
                }
            }
        });
    }

    public createReturnMsg (days, guestMessage): string {
        return `This item must be returned within ${days} days of the ship date.
                                <a [routerLink]="'policy'">${guestMessage}</a>. Prices, promotions, styles 
                                and availability may vary by store and online.`;
    }
}
