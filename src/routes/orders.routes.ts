import {NextFunction, Request, Response, Router} from "express";
import {OrdersController} from "../controllers/orders.controller";
import { getCartConsumer } from "../schemas/cart.schema";
import validatorHandler from "../middlewares/validator.handler";

const ordersController = new OrdersController();

const router: Router =  Router();

/**
 * @swagger
 * /orders/order-products/{id}:
 *  get:
 *      summary: Get products list orders by producer
 *      tags: [Orders]
 *      response:
 *          200:
 *              description: Get products list by producer
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: integer
 *                          example: 13
 *          500:
 *              description: Server error
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
     *                          $ref: '#/components/schemas/Product'
 */
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
