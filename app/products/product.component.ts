import {Component,OnInit} from '@angular/core';
import {IProduct} from './products'
import {ProductService} from './product.service'
@Component({
    selector:'learn-product',
    templateUrl:'app/products/product.component.html',
    //styles:['thead{color:green;}']
    styleUrls:['app/products/product.component.css']
})

export class ProductComponent implements OnInit{
    title:string="****Product List*****";
    showImage:boolean =false;
    imageWidth:number = 50;
    filterText:number;
    errorMessage:string;    
    products:IProduct[];

    toggleImage():void{
        this.showImage = !this.showImage
    }

    constructor(private _productService:ProductService){

    }

    ngOnInit():void{
     this._productService.getProducts()
        .subscribe(products =>this.products = products,
            error=>this.errorMessage =<any>error)
    }
}


/*
One way
    -Data binding  {{}}
    -Property binding []
    -Event Binding ()
Two Way [()]
*/