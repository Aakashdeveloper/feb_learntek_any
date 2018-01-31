import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from'./app.component';
import {MobileComponent} from './mobile.component'
import { ProductComponent } from './products/product.component';

@NgModule({
    imports:[
        BrowserModule
    ],
    declarations:[
        AppComponent,
        MobileComponent,
        ProductComponent
    ],
    bootstrap:[
        AppComponent
    ],
    providers:[

    ]
})

export class AppModule{}