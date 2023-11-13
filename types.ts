export interface Product {
    id: string;
    category: Category;
    subcategory:Subcategory;
    name: string;
    description:string;
    price: string;
    quantity: number;
    isFeatured: boolean;
    size: Size;
    color: Color;
    images: Image[]
  };
  
  export interface Image {
    id: string;
    url: string;
  }
  
  export interface Billboard {
    id: string;
    label: string;
    imageUrl: string;
  };
 
  
  export interface Category {
    id: string;
    name: string;
    billboard: Billboard;
    subcategories: Subcategory[];
  };

  export interface Subcategory {
    id: string;
    name: string;
    categoryId: string;
    billboard: Billboard;
  };
  
  export interface Size {
    id: string;
    name: string;
    value: string;
    product:Product[];
  };
  
  export interface Color {
    id: string;
    name: string;
    value: string;
    product:Product[];
  };
