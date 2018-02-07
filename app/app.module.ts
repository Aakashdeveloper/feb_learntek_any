import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router'

import {AppComponent} from'./app.component';
import {MobileComponent} from './mobile.component'
import { ProductComponent } from './products/product.component';
import { ProductFilter } from './products/product-filter.pipe';
import { ProductService } from './products/product.service';
import { ProductDetailComponent } from './products/product-detail.component';
import { NotFoundComponent } from './notfound.component';
import { OrderComponent } from './orders/order.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
           
            {path:'products',component:ProductComponent},
            {path:'products/:id',component:ProductDetailComponent},
            {path:'orders',component:OrderComponent},
            {path:'home',component:HomeComponent},
            {path:'',redirectTo:'home',pathMatch:'full'},
            {path:'**',component:NotFoundComponent}
            
        ])
    ],
    declarations:[
        AppComponent,
        MobileComponent,
        ProductComponent,
        ProductFilter,
        ProductDetailComponent,
        NotFoundComponent,
        OrderComponent,
        HomeComponent
    ],
    bootstrap:[
        AppComponent
    ],
    providers:[
        ProductService
    ]
})

export class AppModule{}