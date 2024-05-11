export interface Product {
    id: string;
    name: string;
    price: number;
    description: number;
    imageUrl: string;
}

export interface ProductsState {
    products: Product[];
    loading: boolean;
    error: string | null;
}