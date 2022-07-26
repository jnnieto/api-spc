import {NextFunction, Request, Response, Router} from "express";
import {NotificationsController} from "../controllers/notifications.controller";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validate-fields";
import {OrderRequest} from "../interfaces/order-request.interface";

const notificationsController = new NotificationsController();

const router: Router = Router();

router.post('/purchase-request',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const request: OrderRequest = req.body;
            const response = await notificationsController.notifyPurchaseRequest(request);
            res.status(200).json({ message: "ok" });
        } catch (e) {
            next(e);
        }
    });

export default router;
