import Boom from "@hapi/boom";
import admin from "../firebase/config";
import {Order} from "../interfaces/order.interface";

const db = admin.firestore();

export class ProductController {

    async getAllProducts() {
        const snapshot = await db.collection('products').get();
        return snapshot.docs.map(doc => doc.data());
    }

    async reduceProductStock(order: Order) {
        try {
            for (const orderProduct of order.products) {
                const productSnap = await db.collection("products").doc(orderProduct.id).get();
                if (productSnap) {
                    let product: any = productSnap.data();
                    product.stock -= orderProduct.quantity;
                    await db.collection('products').doc(orderProduct.id).update(product);
                }
            }
            return "Stock del producto actualizado";
        } catch (e) {
            throw Boom.internal("Ocurrió un error al actualizar el stock los productos");
        }
    }

    async updateAvailableDate(id: string) {
        const productRef = db.collection("products").doc(id);
        const productSnap = await productRef.get();

        if ( !productSnap.exists ) {
            throw Boom.notFound('Product not found');
        } else {
            await productRef.update({
                availabilityDate: null,
                productiveStatus: "Disponible"
            });
        }

        return productRef;
    }

}
