import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from'./app.component';
import {MobileComponent} from './mobile.component'
import { ProductComponent } from './products/product.component';
import { ProductFilter } from './products/product-filter.pipe';

@NgModule({
    imports:[
        BrowserModule,
        FormsModule
    ],
    declarations:[
        AppComponent,
        MobileComponent,
        ProductComponent,
        ProductFilter
    ],
    bootstrap:[
        AppComponent
    ],
    providers:[

    ]
})

export class AppModule{}