import { Request, Response } from "express";
import admin from "../firebase/config";
import _firestore from "@google-cloud/firestore";
import { Cart } from "../interfaces/cart.interface";
import Boom from "@hapi/boom";

const db = admin.firestore();

interface OrderRequest {
    names: string,
    lastnames: string,
    products: ProductOrder[]
}

interface ProductOrder {
    name: string,
    quantity: number,
    subtotal: number,
    image: string
}

export class OrdersController {

    async getProducersOrder(req: Request, res: Response) {
        const { id } = req.params;
        const cartSnap = await db.collection('users').doc(id).collection('shopping-cart').get();
        const shoppingCarts = cartSnap.docs.map(doc => doc.data()) as Cart[];
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
                        subtotal: cart.subtotal,
                        image: cart.product.image
                    }
                    products.push(product)
                }
            });

            orderRequest = {
                names: producer.names,
                lastnames: producer.lastnames,
                products
            }

            orders.push(orderRequest);
        })

        res.status(200).json(orders)
    }

}
