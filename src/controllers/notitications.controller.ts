import admin from "../firebase/config";
import Boom from "@hapi/boom";
import { User } from "../interfaces/user.interface";
import axios from "axios";


const db = admin.firestore();
const baseURL = 'https://fcm.googleapis.com/fcm/send';
const serverPassword = process.env.SERVER_PASWORD;

export class NotificationsController {

    async notifyPurchaseRequest(id: string) {

        const producerRef = await db.collection('users').doc(id).get();
        const producerSnap = producerRef.data() as User;

        if (!producerSnap) {
            throw Boom.notFound('Producer not found');
        }

        if (producerSnap.notificationsToken) {
            axios({
                method: 'post',
                url: baseURL,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `key=${ serverPassword }`
                },
                data: {
                    "notification": {
                        "title": "Tienes un nuevo pedido",
                        "body": `Revisa tu perfil en SPC, un consumidor te solicitó un pedido`
                    },
                    to: producerSnap.notificationsToken[0]
                }
            }).then(res => {
                return res.data;
            });
        }

    }

}
