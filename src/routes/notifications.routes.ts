import {NextFunction, Request, Response, Router} from "express";
import {NotificationsController} from "../controllers/notifications.controller";
import { Order } from './../interfaces/order.interface';

const notificationsController = new NotificationsController();

const router: Router = Router();

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

export default router;
