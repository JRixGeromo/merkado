// src/types.ts
export type Product = {
    id: string;
    name: string;
    description: string;
    price: string;
    discountedPrice: string;
    imageUrl: string;
    isNew: boolean;
    isPopular: boolean;
    discount: string;
    vendor: string;
    region: string;
    distance?: string; // Optional
    location?: string; // Optional
    rating?: number; // Optional
    likes?: number; // Optional
    onSale?: boolean; // Optional
  };
  
  export type Store = {
    id: string;
    name: string;
    distance: string;
    location: string;
  };
  