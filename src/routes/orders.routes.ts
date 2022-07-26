import {NextFunction, Request, Response, Router} from "express";
import {OrdersController} from "../controllers/orders.controller";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validate-fields";

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
router.get('/order-products/:id', [
        check('id', 'El id de consumidor es obligatori0').not().isEmpty(),
        check('id', 'El id debe tener un mínimo 25 y máximo 30 caracteres').isLength({ min: 25, max: 30 }),
        validateFields
    ],   
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const orders = await ordersController.getProducersOrder(id);
            res.status(200).json(orders);
        } catch (err) {
            next(err);
        }
    }
);

router.get('available-carries/:id')

export default router;
