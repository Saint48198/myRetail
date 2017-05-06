import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'quantity-input',
    styleUrls: ['./_quantity-input.component.scss'],
    templateUrl: './quantity-input.component.html'
})
export class QuantityInputComponent {
    currentQuantity: number = 1;
}
