import Boom from "@hapi/boom";
import admin from "../firebase/config";

const db = admin.firestore();

export class ProductController {

    async getAllProducts() {
        const snapshot = await db.collection('products').get();
        return snapshot.docs.map(doc => doc.data());
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
