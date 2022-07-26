import {ProductOrder} from "./order-request.interface";
import {Address} from "./address.interface";

export interface Order {
    idProducer: string;
    idConsumer: string;
    orderDate: Date;
    products: ProductOrder[];
    address: Address;
    total: number;
    chosenPayment: PaymentMethod;
    status: string;
    paymentLimitDate?: Date;
    idCarrier?: string;
    id?: string;
}

export interface PaymentMethod {
    name: string;
    identification: string;
    phone: string;
    image: string;
    id?: string;
}
