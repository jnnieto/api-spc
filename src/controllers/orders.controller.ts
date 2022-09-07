
import Boom from "@hapi/boom";
import admin from "../firebase/config";

import { Cart } from "../interfaces/cart.interface";
import { OrderRequest, ProductOrder } from "../interfaces/order-request.interface";

const db = admin.firestore();

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

    async searchAvailableCarriers(municipalities: string[]) {

        const carriersRef = db.collection('users')
        const carrierSnap = await carriersRef.where('typeuser', '==', 'Transportador').get();

        const carriers = carrierSnap.docs.map(carrier => carrier.data());

        if (municipalities.length > 0) {
            return Promise.all(carriers.map(async (carrier) => {
                const routesSnap = await carriersRef.doc(carrier.uid).collection('routes').where('routes', 'array-contains-any', municipalities).get();
    
                if (!routesSnap.empty) {
                    const vehicleSnap = await carriersRef.doc(carrier.uid).collection('vehicle').get();
    
                    return {
                        carrier,
                        routes: routesSnap.docs.map(r => r.data()),
                        vehicle: vehicleSnap.docs.map(v => v.data())
                    }
                } else {
                    return null
                }
            }))
            
        } else {
            return {}
        }

    }

}
