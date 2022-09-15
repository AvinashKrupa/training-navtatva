import React from "react";

export default class Permalink {

  static ofProduct(item: any): string {    
    return "/product/" + item.slug + "/" + (item.product_id? item.product_id: item.id);
  }

  static ofCategory(item: any): string {   
    return "/shop/" + item.slug + "/" + item.id;
  }

  static ofBrand(item: any): string {   
    return "/brand/" + item.slug + "/" + item.id;
  }

  static ofModel(item: any): string {   
    return "/model/" + item.slug + "/" + item.id;
  }
}
