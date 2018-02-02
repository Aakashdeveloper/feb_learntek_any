"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ProductFilter = /** @class */ (function () {
    function ProductFilter() {
    }
    ProductFilter.prototype.transform = function (value, filterBy) {
        filterBy = filterBy ? filterBy.toLowerCase() : null;
        return filterBy ? value.filter(function (product) {
            return product.productName.toLowerCase().indexOf(filterBy) !== -1;
        }) : value;
    };
    ProductFilter = __decorate([
        core_1.Pipe({
            name: 'productFilter'
        })
    ], ProductFilter);
    return ProductFilter;
}());
exports.ProductFilter = ProductFilter;
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
//# sourceMappingURL=product-filter.pipe.js.map