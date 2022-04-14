import {NextFunction, Request, Response, Router} from "express";
import {OrdersController} from "../controllers/orders.controller";
import { getCartConsumer } from "../schemas/cart.schema";
import validatorHandler from "../middlewares/validator.handler";

const ordersController = new OrdersController();

const router: Router =  Router();

router.get('/order-products/:id',
    validatorHandler(getCartConsumer, 'params'),
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const orders = await ordersController.getProducersOrder(id);
            res.status(200).json(orders);
        } catch (err) {
            next(err);
        }
    }
)

export default router;
