import { Request, Response } from "express";
import admin from "../firebase/config";

const db = admin.firestore();

export const getAllProducts = async (req: Request, res: Response) => {
    const snapshot = await db.collection('products').get();
    const products = snapshot.docs.map(doc => doc.data());
    res.status(200).json(products);
}

export const updateAvailableDate = async (req: Request, res: Response) => {
    const { id } = req.params;
    const productRef = db.collection("products").doc(id)
    const productSnap = await productRef.get();

    if ( !productSnap.exists ) {
      res.status(404).json({
        msg: `No existe el producto con el id ${ id }`
      });
    } else {
      productRef.update({
        availabilityDate: null,
        productiveStatus: "Disponible"
      })

    }
}
