import {NextFunction, Request, Response, Router} from "express";
import {NotificationsController} from "../controllers/notifications.controller";
import { Order } from '../interfaces/order.interface';

const notificationsController = new NotificationsController();

const router: Router = Router();

/**
 * @swagger
 * /notifcations/purchase-request/{id}:
 *  get:
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
router.post('/purchase-request',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const order: Order = req.body;
            const response = await notificationsController.notifyPurchaseRequest(order);
            res.status(200).json({ message: "ok" });
        } catch (e) {
            next(e);
        }
    });

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

export default router;
