import {NextFunction, Request, Response, Router} from "express";
import {NotificationsController} from "../controllers/notifications.controller";
import { Order } from '../interfaces/order.interface';

const notificationsController = new NotificationsController();

const router: Router = Router();

/**
 * @swagger
 * /notifcations/purchase-request:
 *  post:
 *      summary: Envía una notificación y un correo electrónico al transportador para indicarle que se le ha solicitado un pedido
 *      tags: [Notifications]
 *      response:
 *          200:
 *              description: La notificación y el correo electrónico han sido enviados al transportador.
 *              content:
 *                  application/json:
 *                      schema:
 *                          example:
 *                              message: "Se ha notificado al productor: Pepito Pérez de que su pedido ya fue entregado."
 *          404:
 *              description: El productor a notificar, no ha sido encontrado.
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: Object
 *                          $ref: ''
 *                          example:
 *                              message: "sldosdf"
 *
 *          500:
 *              description: Server error
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/ServerError'
 */
router.post('/purchase-request',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const order: Order = req.body;
            const response = await notificationsController.notifyPurchaseRequest(order);
            res.status(200).json({ message: response });
        } catch (e) {
            next(e);
        }
    });

/**
 * @swagger
 * /notifcations/order-paid:
 *  post:
 *      summary: Send email a notification of a purchase request to producer
 *      tags: [Notifications]
 *      response:
 *          200:
 *              description: Email ang purchase request sent
 *              content:
 *               application/json:
 *                  schema:
 *                      example:
 *                          message: "ok"
 *          500:
 *              description: Server error
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Notifications'
 */
router.post('/order-paid',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const order: Order = req.body;
            const response = await notificationsController.notifyPaidOrder(order);
            res.status(200).json({
                message: response
            })
        } catch (e) {
            next(e);
        }
});

/**
 * @swagger
 * /notifcations/order-on-the-way:
 *  post:
 *      summary: Send email an notification of a purchase request to producer
 *      tags: [Notifications]
 *      response:
 *          200:
 *              description: Email ang purchase request sent
 *              content:
 *               application/json:
 *                  schema:
 *                      example:
 *                          message: "ok"
 *          500:
 *              description: Server error
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Notifications'
 */
router.post('/order-on-the-way',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const order: Order = req.body;
            const response = await notificationsController.notifyOrderOnTheWay(order);
            res.status(200).json({
                message: response
            })
        } catch (e) {
            next(e);
        }
});

/**
 * @swagger
 * /notifcations/order-delivered:
 *  post:
 *      summary: Send email an notification of a purchase request to producer
 *      tags: [Notifications]
 *      response:
 *          200:
 *              description: Email ang purchase request sent
 *              content:
 *               application/json:
 *                  schema:
 *                      example:
 *                          message: "ok"
 *          500:
 *              description: Server error
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Notifications'
 */
router.post('/order-delivered',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const order: Order = req.body;
            const response = await notificationsController.notifyOrderDelivered(order);
            res.status(200).json({
                message: response
            })
        } catch (e) {
            next(e);
        }
});

export default router;
