import {Component} from '@angular/core';

@Component({
    selector:'learn-product',
    templateUrl:'app/products/product.component.html'
})

export class ProductComponent{
    title:string="****Product List*****";
    showImage:boolean =false;
    filterText:number;
    products:any[]=[
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        },
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        }
    ]

    toggleImage():void{
        this.showImage = !this.showImage
    }
}


/*
One way
    -Data binding  {{}}
    -Property binding []
    -Event Binding ()
Two Way [()]
*/