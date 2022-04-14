import { Product } from "./product.interface";

export interface Cart {
    id?: string;
    product: Product;
    quantity: number;
    subtotal: number;
}
