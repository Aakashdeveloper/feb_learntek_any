import {Component} from '@angular/core';

@Component({
    selector:'learn-product',
    templateUrl:'app/products/product.component.html'
})

export class ProductComponent{
    title:string="****Product List*****"
}


/*
One way
    -Data binding  {{}}
    -Property binding []
    -Event Binding ()
Two Way [()]
*/