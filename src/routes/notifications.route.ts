import {NextFunction, Request, Response, Router} from "express";
import validatorHandler from "../middlewares/validator.handler";
import {getIdDocument} from "../schemas/document.schema";
import {NotificationsController} from "../controllers/notitications.controller";

const notificationsControler = new NotificationsController();

const router: Router = Router();

router.post('/purchase-request/:id',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const response = await notificationsControler.notifyPurchaseRequest(id);
            res.status(200).json(response);
        } catch (e) {
            next(e);
        }
    });

export default router;
