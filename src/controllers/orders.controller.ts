import admin from "../firebase/config";
import Boom from "@hapi/boom";

import { Cart } from "../interfaces/cart.interface";

const db = admin.firestore();

interface OrderRequest {
    idProducer: string,
    names: string,
    lastnames: string,
    products: ProductOrder[]
}

interface ProductOrder {
    name: string,
    quantity: number,
    unit: string,
    subtotal: number,
    image: string
}

export class OrdersController {

    async getProducersOrder(id: string) {

        const cartSnap = await db.collection('users').doc(id).collection('shopping-cart').get();
        const shoppingCarts = cartSnap.docs.map(doc => doc.data()) as Cart[];

        if (shoppingCarts.length <= 0) {
            throw Boom.notFound('Consumer not found')
        }

        const idProducers: any[] = [];
        const producers: any[] = [];
        const orders: OrderRequest[] = [];

        for (const cart of shoppingCarts) {
            if (!idProducers.includes(cart.product.idProducer)) {
                const producerSnap = await db.collection('users').doc(cart.product.idProducer).get();
                producers.push(producerSnap.data());
                idProducers.push(cart.product.idProducer)
            }
        }

        producers.forEach(producer => {
            let orderRequest: OrderRequest;
            const products: ProductOrder[] = [];
            // @ts-ignore
            shoppingCarts.forEach(cart => {
                if (cart.product.idProducer.trim() === producer.uid.trim()) {
                    const product: ProductOrder = {
                        name: cart.product.name,
                        quantity: cart.quantity,
                        unit: cart.product.unit,
                        subtotal: cart.subtotal,
                        image: cart.product.image
                    }
                    products.push(product)
                }
            });
            orderRequest = {
                idProducer: producer.uid.trim(),
                names: producer.names,
                lastnames: producer.lastnames,
                products
            }
            orders.push(orderRequest);
        });
        return orders;

    }

}
