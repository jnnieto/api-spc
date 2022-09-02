import axios from "axios";
import Boom from "@hapi/boom";
import admin from "../firebase/config";

import {notifyOrderPaidConsumer, purchaseRequest} from "../helpers/body-emails";
import { User } from "../interfaces/user.interface";
import { transporter } from "../helpers/email-transporter";
import { Order } from "../interfaces/order.interface";
import {NotificationData} from "../interfaces/notification-data.interface";

const db = admin.firestore();
const baseURL = 'https://fcm.googleapis.com/fcm/send';


export class NotificationsController {

    async notifyPurchaseRequest(orderRequest: Order) {
        try {
            const producerSnap = await this.getUserInfo(orderRequest.idProducer, "producer");
            await this.sendEmail(producerSnap, orderRequest, orderRequest.status);

            if (producerSnap.notificationsToken) {
                const { products } = orderRequest;
                const data: NotificationData = {
                    notification: {
                        title: "¡Atención! tienes un nuevo pedido",
                        body: `Un consumidor solicitó tus productos, dirígete a la sección de tus pedidos en SPC, allí encontarás toda la información.`,
                        image: products[0].image
                    },
                    to: producerSnap.notificationsToken
                }
                const res = await this.sendNotification(data);
                if (res === "ok")
                    return `Se ha notificado al productor: ${producerSnap.names} ${producerSnap.lastnames} acerca de su nueva solicitud de pedido agrícola.`
            }
        } catch (error) {
            throw Boom.internal('Ocurrió un error a la hora de enviar la notificación');
        }
    }

    async notifyPaidOrder(orderRequest: Order) {
        try {
            const emailPromises: any[] = [];
            const { products } = orderRequest;

            // Información transportador
            const carrierSnap = await this.getUserInfo(orderRequest.idCarrier || "", 'carrier');
            // await this.sendEmail(carrierSnap, orderRequest, orderRequest.status);

            if (carrierSnap.notificationsToken) {
                const data: NotificationData = {
                    notification: {
                        title: "¡Atención! tienes un nuevo pedido a transportar",
                        body: `Se te ha asignado un nuevo pedido a transportar, revisa tu perfil SPC, allí encontarás toda la información.`,
                        image: products[0].image
                    },
                    to: carrierSnap.notificationsToken
                }
                emailPromises.push(this.sendNotification(data));
            }

            // Información consumidor
            const consumerSnap = await this.getUserInfo(orderRequest.idConsumer, 'consumer');
            await this.sendEmail(consumerSnap, orderRequest, orderRequest.status);

            if (consumerSnap.notificationsToken) {
                const data: NotificationData = {
                    notification: {
                        title: "¡Atención! se ha confirmado el pago de tu pedido",
                        body: `El productor ha avalado el pago de tu pedido revisa tu perfil en SPC para estar más informado.`,
                        image: products[0].image
                    },
                    to: consumerSnap.notificationsToken
                }
                emailPromises.push(this.sendNotification(data));
            }

            const res = await Promise.all(emailPromises);
            if (res)
                return `Se ha notificado al consumidor: ${consumerSnap.names} ${consumerSnap.lastnames} que el pago de su pedido ha sido validado por el productor.`
        } catch (error) {
            throw Boom.internal('Ocurrió un error a la hora de enviar la notificación');
        }
    }

    private async getUserInfo(idUser: string, typeUser: 'producer' | 'consumer' | 'carrier'): Promise<User> {
        const userRef = await db.collection('users').doc(idUser).get();
        const userSnap = userRef.data() as User;
        if (!userSnap) {
            throw Boom.notFound(`${
                typeUser === 'producer'
                    ? 'Producer'
                    : typeUser === 'consumer'
                        ? 'Consumer'
                        : 'Carrier'
            } not found`);
        }
        return userSnap;
    }

    private async sendEmail(user: User, order: Order, status: string): Promise<void> {
        let body = {};
        if (status === "Pendiente de pago")
            body = purchaseRequest(user, order);
        else if (status === "Pagado") {
            if (user.typeuser === 'Consumidor') {
                body = notifyOrderPaidConsumer(user);
            } else {
                body = notifyOrderPaidConsumer(user);
            }
        }
        else
            body = {}

        try {
            await transporter.sendMail({
                ...body,
                to: user.email,
            });
        } catch (e) {
            throw Boom.internal('Ocurrió un error a la hora de enviar el correo');
        }
    }

    private sendNotification(data: NotificationData): Promise<string> {
        return new Promise(async (resolve, reject) => {
            const serverPassword = process.env.SERVER_PASSWORD;
            try {
             await axios({
                method: 'post',
                url: baseURL,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `key=${serverPassword}`
                },
                 data
            });
            resolve("ok");
            } catch (e) {
                reject(e);
            }
        })

    }

}
