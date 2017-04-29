import { Routes } from '@angular/router';
import { ProductComponent } from './product';
import { NoContentComponent } from './no-content';

export const ROUTES: Routes = [
    { path: 'product',  component: ProductComponent },
    { path: '',         redirectTo: '/product', pathMatch: 'full' },
    { path: '**',       component: NoContentComponent },
];
