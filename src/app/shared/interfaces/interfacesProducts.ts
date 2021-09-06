export interface ResponseProduct {
    categories: Category[];
    products: Product[];
  }
  
 export interface Product {
    product_data: Productdata;
  }
  
 export interface Productdata {
    id: number;
    kind: number;
    ean: string;
    price: number;
    name: string;
    categories: CategoryProduct[];
    stock: number;
    ordinal?: number;
  }
  
  interface CategoryProduct {
    category_id: number;
    ordinal: number;
  }
  
export  interface Category {
    id: number;
    name: string;
    ordinal: number;
  }