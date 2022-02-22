import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

import * as express from "express";
import * as cors from "cors";


admin.initializeApp();

const db = admin.firestore();


const app = express();
app.use(cors());

app.post("/products/:id/productive-status", async (req, res) => {
  const {id} = req.params;
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

  

})

exports.api = functions.https.onRequest(app);


/* export const onProductiveStatusUpdate = functions.firestore
    .document("products/{id}").onCreate(async (snap) => {
      const previewValues = snap.data();
      const lastDate = new Date(previewValues.availabilityDate);
      const dateNow = new Date(Date.now());
      if (lastDate.getTime() <= dateNow.getTime()) {
        console.log("entro");
        // eslint-disable-next-line max-len
        const snapshot = await db.collection("products").where("id", "==", previewValues.id).get();
        const updatePromises: unknown[] = [];
        snapshot.forEach((doc) => {
          updatePromises.push(db.collection("products").doc(doc.id).update({
            availabilityDate: "",
            productiveStatus: "Disponible",
          }));
        });
        await Promise.all(updatePromises);
      }
    }); */

/* export const onProductDelete = functions.firestore
    .document("products/{id}").onDelete(async (snap) => {
      const deleteProduct = snap.data();
      const deletePromises: unknown[] = [];
      const bucket = admin.storage;
      const filePath = `products/${ deleteProduct.image }`;
      deleteProduct.image.forEach((image: string) => {
        deletePromises.push(bucket.file(image).delete());
      });
      await Promise.all(deletePromises);
    }); */
