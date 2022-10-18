import admin from "../firebase/config";
import { Order } from "../interfaces/order.interface";
import { ProductOrder } from "../interfaces/order-request.interface";
import Boom from "@hapi/boom";
import {activeOrderStatus, productTypes} from "../helpers/static-data";
import {Product} from "../interfaces/product.interface";

const db = admin.firestore();

export interface MunicipalityTop {
    name: string,
    quantity: number
}

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
            const orderRef = await db.collection('orders').orderBy('orderDate').limit(10).get();
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

    async getTopMunicipalities() {
        try {
            const productsRef = await db.collection('products').get();
            let topMunicipalities: MunicipalityTop[] = [];
            productsRef.forEach(product => {
                const data = product.data() as Product;
                if (data.municipality) {
                    if (topMunicipalities.some(m => m.name === data.municipality)) {
                        topMunicipalities = topMunicipalities.map(m => {
                            if (m.name === data.municipality) {
                                m.quantity++;
                                return {
                                    ...m,
                                    quantity: m.quantity
                                }
                            } else {
                                return m;
                            }
                        })
                    } else {
                        topMunicipalities.push({ name: data.municipality, quantity: 1 })
                    }
                }
            });
            topMunicipalities.sort((a, b) => b.quantity - a.quantity).slice(0, 9);
            return topMunicipalities;
        } catch(e) {
            throw Boom.internal('Ocurrió un error al cargar el top municipios con más productos')
        }
    }

    async getActiveOrders() {
        try {
            const activeOrders: any = {};
            for (const status of activeOrderStatus) {
                const ordersRef = await db.collection('orders').where('status', '==', status).get();
                if (ordersRef.size === 0) {
                    activeOrders[status] = 0;
                } else {
                    activeOrders[status] = ordersRef.size;
                }
            }
            return activeOrders;
        } catch (e) {
            throw Boom.internal('Ocurrió un error al cargar la cantidad de productos activos')
        }
    }

}
