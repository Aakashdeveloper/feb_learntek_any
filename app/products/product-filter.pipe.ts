import {Pipe,PipeTransform} from '@angular/core';
import {IProduct} from './products'

@Pipe({
    name:'productFilter'
})

export class ProductFilter implements PipeTransform{
    transform(value:IProduct[],filterBy:string):IProduct[]{
        filterBy = filterBy? filterBy.toLowerCase():null
        return filterBy? value.filter((product:IProduct)=>
        product.productName.toLowerCase().indexOf(filterBy) !== -1):value
    }
}

/*
function add(a){
    return a+a
}

var add = function(a){
    return a+a
}

var add = (a) =>{
    return a+a
}
*/