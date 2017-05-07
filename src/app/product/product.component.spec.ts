import { ActivatedRoute, Data } from '@angular/router';
import { Component } from '@angular/core';
import { inject, TestBed, ComponentFixture } from '@angular/core/testing';

// Load the implementations that should be tested
import { ProductComponent } from './product.component';

describe('Product', () => {
    let comp: ProductComponent;
    let fixture: ComponentFixture<ProductComponent>;

    // provide our implementations or mocks to the dependency injector
    beforeEach(() => TestBed.configureTestingModule({
        providers: [
            // provide a better mock
            {
                provide: ActivatedRoute,
                useValue: {
                    data: {
                        subscribe: (fn: (value: Data) => void) => fn({
                            yourData: 'yolo'
                        })
                    }
                }
            },
            ProductComponent
        ]
    }));

    // synchronous beforeEach
    beforeEach(() => {
        fixture = TestBed.createComponent(ProductComponent);
        comp = fixture.componentInstance;

        fixture.detectChanges(); // trigger initial data binding
    });

    it('should log ngOnInit', inject([ProductComponent], (product: ProductComponent) => {
        spyOn(console, 'log');
        expect(console.log).not.toHaveBeenCalled();

        product.ngOnInit();
        expect(console.log).toHaveBeenCalled();
    }));
});
