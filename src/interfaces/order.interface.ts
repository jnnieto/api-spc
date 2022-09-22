import {ProductOrder} from "./order-request.interface";
import {Address} from "./address.interface";
import {firestore} from "firebase-admin";
import Timestamp = firestore.Timestamp;

export interface Order {
    idProducer: string;
    idConsumer: string;
    orderDate: Timestamp;
    products: ProductOrder[];
    address: Address;
    total: number;
    chosenPayment: PaymentMethod;
    status: string;
    paymentLimitDate?: Date;
    tariff?: number;
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
