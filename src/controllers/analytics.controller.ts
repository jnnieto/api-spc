import admin from "../firebase/config";
import { Order } from "../interfaces/order.interface";
import { ProductOrder } from "../interfaces/order-request.interface";
import Boom from "@hapi/boom";
import {productTypes} from "../helpers/static-data";

const db = admin.firestore();

export class AnalyticsController {

    async adminNews() {
        const usersNotVerified = await db.collection('users').where('isVerifiedPerson', '==', false).get();
        const users = usersNotVerified.size;

        const pqrsNotResponded = await db.collection('pqrMailbox').where('answer', '==', 'Pendiente').get();
        const pqrs = pqrsNotResponded.size;

        return {
            users,
            pqrs
        }
    }

    async productsRecentlyPurchased() {
        try {
            const orderRef = await db.collection('orders').orderBy('orderDate').limit(5).get();
            const recent: any[] = [];
            orderRef.docs.forEach(order => {
                const {status, orderDate, products} = order.data() as Order;
                products.forEach((product: ProductOrder) => {
                    recent.push({
                        name: product.name,
                        quantity: product.quantity,
                        subtotal: product.subtotal,
                        status,
                        orderDate: orderDate.toDate().toLocaleDateString()
                    });
                });
            });
            return recent;
        } catch (e) {
            throw Boom.internal('Ocurrió un error al cargar los productos pedidos recientemente')
        }
    }

    async usersByType() {
        try {
            const producersRef = await db.collection('users').where('typeuser', '==', 'Productor').get();
            const producers = producersRef.size;

            const consumersRef = await db.collection('users').where('typeuser', '==', 'Consumidor').get();
            const consumers = consumersRef.size;

            const carriersRef = await db.collection('users').where('typeuser', '==', 'Transportador').get();
            const carriers = carriersRef.size;

            return {
                producers,
                consumers,
                carriers
            }
        } catch (e) {
            throw Boom.internal('Ocurrió un error al momento de traer la catidad de usuarios por tipo');
        }
    }

    async usersQuantity() {
        try {
            const usersRef = await db.collection('users').where('typeuser', '!=', 'Administrador').get();
            return {
                users: usersRef.size
            }
        } catch (e) {
            throw Boom.internal('Ocurrió un error al cargar la catidad de usuarios que hay en SPC')
        }
    }

    async productsQuantity() {
        try {
            const productsRef = await db.collection('products').get();
            return {
                products: productsRef.size
            }
        } catch (e) {
            throw Boom.internal('Ocurrió un error al cargar la catidad de productos que hay en SPC')
        }
    }

    async productsQuantityByType() {
        try {
            const productsByType: any = {};
            for (const productType of productTypes) {
                const productsRef = await db.collection('products').where('productType', '==', productType).get();
                const type = productType.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ /g, "-");
                productsByType[type] = productsRef.size;
            }
            return productsByType;
        } catch (e) {
            throw Boom.internal('Ocurrió un error al cargar la catidad de productos por tipo')
        }
    }

}