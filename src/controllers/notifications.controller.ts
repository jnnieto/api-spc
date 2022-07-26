import axios from "axios";
import Boom from "@hapi/boom";
import admin from "../firebase/config";
import { User } from "../interfaces/user.interface";

import { transporter } from "../helpers/email-transporter";
import { purchaseRequest } from "../helpers/body-emails";
import {OrderRequest} from "../interfaces/order-request.interface";

const db = admin.firestore();
const baseURL = 'https://fcm.googleapis.com/fcm/send';
const serverPassword = process.env.SERVER_PASWORD;

export class NotificationsController {

    async notifyPurchaseRequest(orderRequest: OrderRequest) {

        const producerRef = await db.collection('users').doc(orderRequest.idProducer).get();
        const producerSnap = producerRef.data() as User;

        if (!producerSnap) {
            throw Boom.notFound('Producer not found');
        }

        await this.sendEmail(producerSnap.email);

        if (producerSnap.notificationsToken) {
            const { names, lastnames, products,  } = orderRequest;
            const fullName = names.concat(" ".concat(lastnames));
            axios({
                method: 'post',
                url: baseURL,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `key=${ serverPassword }`
                },
                data: {
                    "notification": {
                        "title": "¡Tienes un nuevo pedido!",
                        "body": `Revisa tu perfil en SPC, el consumidor ${ fullName } te solicitó productos`,
                        "image": products[0].image
                    },
                    to: producerSnap.notificationsToken
                }
            }).then(res => {
                return `Se ha notificado al productor: ${ producerSnap.names } ${ producerSnap.lastnames } de la nueva solicitud de pedido`
            }).catch(err => {
                throw Boom.internal('Ocurrió un error a la hora de enviar la notifación');
            });
        }
    }

    private async sendEmail(email: string): Promise<void> {
        try {
            await transporter.sendMail({
                ...purchaseRequest,
                to: email,
            });
        } catch (e) {
            throw Boom.internal('Ocurrió un error a la hora de enviar el correo');
        }
    }

}
