"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var product_service_1 = require("./product.service");
var ProductComponent = /** @class */ (function () {
    function ProductComponent(_productService) {
        this._productService = _productService;
        this.title = "****Product List*****";
        this.showImage = false;
        this.imageWidth = 50;
    }
    ProductComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._productService.getProducts()
            .subscribe(function (products) { return _this.products = products; }, function (error) { return _this.errorMessage = error; });
    };
    ProductComponent = __decorate([
        core_1.Component({
            selector: 'learn-product',
            templateUrl: 'app/products/product.component.html',
            //styles:['thead{color:green;}']
            styleUrls: ['app/products/product.component.css']
        }),
        __metadata("design:paramtypes", [product_service_1.ProductService])
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
/*
One way
    -Data binding  {{}}
    -Property binding []
    -Event Binding ()
Two Way [()]
*/ 
//# sourceMappingURL=product.component.js.map