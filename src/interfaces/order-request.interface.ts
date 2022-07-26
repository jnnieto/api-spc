import {PaymentMethod} from "./order.interface";
import {Address} from "./address.interface";

export interface OrderRequest {
    idProducer: string,
    names: string,
    lastnames: string,
    products: ProductOrder[]
    chosenPayment?: PaymentMethod;
    address?: Address;
    total?: number;
}

export interface ProductOrder {
    name: string,
    quantity: number,
    unit: string,
    subtotal: number,
    image: string
}
