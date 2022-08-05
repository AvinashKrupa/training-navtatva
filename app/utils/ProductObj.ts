import React from "react";
import HtmlParser from "html-react-parser";

export default class ProductObj {

    data: any;
    currency: string;

    constructor(item?: any, currency: string = 'INR'){
        this.data = item;
        this.currency = currency;
    }
    getName(): string {
        return this.data?.attributes?.name;
    }
    getFeaturedImage(): string {
        return this.data?.attributes?.images?.length ? this.data?.attributes?.images[0]: "/images/detail-img.png";
    }
    getPrice(): string {
        return (this.data?.attributes?.originalPrice?.currencies[this.currency]?.amount ?? 0).toLocaleString('en-IN')
    }
    getSalePrice(): string {
        return (this.data?.attributes?.discountPrice?.currencies[this.currency]?.amount ?? 0).toLocaleString('en-IN')
    }
    getOffAmount(): string {    
        let price = this.data?.attributes?.originalPrice?.currencies[this.currency]?.amount ?? 0
        let salePrice = this.data?.attributes?.discountPrice?.currencies[this.currency]?.amount ?? 0
        return (price-salePrice).toLocaleString()
    }
    getOffPercent(): number {
        let price = this.data?.attributes?.originalPrice?.currencies[this.currency]?.amount ?? 0
        let salePrice = this.data?.attributes?.discountPrice?.currencies[this.currency]?.amount ?? 0
        return Math.round((price-salePrice)/price*100*100)/100
    } 
    getStockLine(): any {
        return HtmlParser(`Hurry! Only <strong> ${this.data?.attributes?.stock} Items</strong> Left in Stock`)
    }
    getShortDescription() {
        return HtmlParser(this.data?.attributes?.description)
    }
    getDescription() {
        return HtmlParser(this.data?.attributes?.description)
    }
    getSizes() {
        let sizes = this.data?.meta.variations.filter((info: any) => {
          return info.name == "Size";
        });
        if (sizes.length > 0) {
          return sizes[0].options;
        } else {
          return [];
        }
    }    
    getColors() {
        Object.keys(this.data?.meta.variation_matrix);
        let colors = this.data?.meta.variations.filter((info: any) => {
            return info.name == "Color";
        });

        if (colors.length > 0) {
            return colors[0].options;
        } else {
            return [];
        }
    }
    getQuantityList() {
        return [10,20,30,40,50,100]
    }
}