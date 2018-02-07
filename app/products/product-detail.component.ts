import {Component,OnInit} from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'

@Component({
    templateUrl:'app/products/product-detail.component.html'
})

export class ProductDetailComponent implements OnInit{
    title:string="Product Details"
    name:string;
    desc:string;
    imgUrl:string

    constructor(private _route:ActivatedRoute,
                private _router:Router){}

    ngOnInit():void{
        let id = +this._route.snapshot.params['id']
        this.title += `:${id}`

        this._route
            .queryParams
            .subscribe(params=>{
                this.name=params['name'];
                this.desc=params['desc'];
                this.imgUrl=params['img']
            })
    }

    onBack():void{
        this._router.navigate(['/products'])
    }
}