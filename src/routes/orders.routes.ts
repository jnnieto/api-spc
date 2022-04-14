import {Router} from "express";
import {OrdersController} from "../controllers/orders.controller";
import { getCartConsumer } from "../schemas/cart.schema";
import validatorHandler from "../middlewares/validator.handler";

const ordersController = new OrdersController();

const router: Router =  Router();

router.get('/order-products/:id', ordersController.getProducersOrder);

export default router;
