import axios from "axios";
import Boom from "@hapi/boom";
import admin from "../firebase/config";

import { purchaseRequest } from "../helpers/body-emails";
import { User } from "../interfaces/user.interface";
import { transporter } from "../helpers/email-transporter";
import { Order } from "../interfaces/order.interface";

const db = admin.firestore();
const baseURL = 'https://fcm.googleapis.com/fcm/send';
const serverPassword = process.env.SERVER_PASSWORD;

export class NotificationsController {

    async notifyPurchaseRequest(orderRequest: Order) {

        try {
            const producerRef = await db.collection('users').doc(orderRequest.idProducer).get();
            const producerSnap = producerRef.data() as User;

            if (!producerSnap) {
                throw Boom.notFound('Producer not found');
            }
            
            await this.sendEmail(producerSnap, orderRequest);

            if (producerSnap.notificationsToken) {
                const { products } = orderRequest;
                await axios({
                    method: 'post',
                    url: baseURL,
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `key=${serverPassword}`
                    },
                    data: {
                        "notification": {
                            "title": "¡Atención! tienes un nuevo pedido",
                            "body": `Un consumidor solicitó tus productos, dirígete a la sección de tus pedidos en SPC, allí encontarás toda la información.`,
                            "image": products[0].image
                        },
                        to: producerSnap.notificationsToken
                    }
                })
                return `Se ha notificado al productor: ${producerSnap.names} ${producerSnap.lastnames} acerca de su nueva solicitud de pedido agrícola.`
            }
        } catch (error) {
            throw Boom.internal('Ocurrió un error a la hora de enviar la notificación');
        }
    }

    private async sendEmail(user: User, order: Order): Promise<void> {
        const body = purchaseRequest(user, order)
        try {
            await transporter.sendMail({
                ...body,
                to: user.email,
            });
        } catch (e) {
            throw Boom.internal('Ocurrió un error a la hora de enviar el correo');
        }
    }

}
