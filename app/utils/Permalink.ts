import { useRouter } from "next/router";
import React from "react";

export default class Permalink {
    
    static ofProduct(item: any): string {
      const router = useRouter();
      const {slug, id} = router.query;
      return "/product/"+item.slug+"/"+item.id;
    }

    static ofCategory(item: any): string {
        const router = useRouter();
        const {slug, id} = router.query;
        return "/shop/"+item.slug+"/"+item.id;
    }

    static ofBrand(item: any): string {
        const router = useRouter();
        const {slug, id} = router.query;
        return "/brand/"+item.slug+"/"+item.id;
    }

    static ofModel(item: any): string {
        const router = useRouter();
        const {slug, id} = router.query;
        return "/model/"+item.slug+"/"+item.id;
    }
}