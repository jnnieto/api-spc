import {NextFunction, Request, Response, Router} from "express";
import {OrdersController} from "../controllers/orders.controller";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validate-fields";
import {Tariff} from "../interfaces/tariff.interface";

const ordersController = new OrdersController();
const router: Router =  Router();

/**
 * @swagger
 * /orders/order-products/{id}:
 *  get:
 *      summary: Get products list orders by producer
 *      tags: [Orders]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *                type: string
 *                example: oHzwRWvGUXhFo09zayIfWQkicTh2
 *            required: true
 *            description: Id del consumidor
 *      responses:
 *          200:
 *              description: Lista de productos para solicitar
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/OrderRequest'
 *          400:
 *              description: Id del consumidor mal enviado
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/ValidatorError'
 *                      example:
 *                          - value: null
 *                            msg: El id de consumidor es obligatorio
 *                            param: id
 *                            location: params
 *                          - value: hola
 *                            msg: El id debe tener un mínimo 5 y máximo 30 caracteres
 *                            param: id
 *                            location: params
 *          500:
 *              description: Server error
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/ServerError'
 *                      example:
 *                          message: Server error
 *                          stack: /orders/order-products/{id}
 */
router.get('/order-products/:id', [
        check('id', 'El id de consumidor es obligatorio').not().isEmpty(),
        check('id', 'El id debe tener un mínimo 5 y máximo 30 caracteres').isLength({ min: 5, max: 30 }),
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

/**
 * @swagger
 * /orders/available-carriers:
 *  post:
 *      summary: Obtener la lista de transportadores disponibles por municipios
 *      tags: [Orders]
 *      requestBody:
 *          description: Lista de municipios
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: array
 *                  example: [ "La Mesa", "Facatativá" ]
 *      responses:
 *          200:
 *              description: Lista de productos para solicitar
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              type: object
 *                              properties:
 *                                  carrier:
 *                                      $ref: '#/components/schemas/User'
 *          500:
 *              description: Server error
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/ServerError'
 *                      example:
 *                          message: Server error
 *                          stack: /orders/available-carriers
 *
 */
router.post('/available-carriers',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const body = req.body as string[];
            const availableCarriers = await ordersController.searchAvailableCarriers(body);
            res.status(200).json(availableCarriers);
        } catch (error) {
            next(error);
        }
    }
);

/**
 * @swagger
 * /orders/calculate-order-tariff:
 *  post:
 *      summary: Calcular la terifa de envío del pedido
 *      tags: [Orders]
 *      requestBody:
 *          description: Datos de distancia
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          distance:
 *                              type: string
 *                              description: Distancia de la finca al domicilio del consumidor calculada por Google Maps
 *                          idOrder:
 *                              type: string
 *                              description: Id del pedido
 *                  example:
 *                      distancia: 24 km
 *                      idOrder: oHzwRWvGUXhFo09zayIfWQkicTh2
 *      responses:
 *          200:
 *              description: Valor de la tarifa calculada
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: integer
 *                      example: 10000
 *          404:
 *              description: Pedido no encontrado
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/NotFound'
 *                      example:
 *                          statusCode: 400
 *                          error: Not found
 *                          message: Order not found
 *          400:
 *              description: Pedido que no se le puede calcular la tarifa de envío por su estado
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/ValidatorError'
 *          500:
 *              description: Server error
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/ServerError'
 *                      example:
 *                          message: Server error
 *                          stack: /orders/available-carriers
 *
 */
router.post('/calculate-order-tariff',
    async  (req: Request, res: Response, next: NextFunction) => {
        try {
            const body = req.body as Tariff;
            console.log(body)
            const response = await ordersController.calculateOrderTariff(body);
            res.status(200).json({ tariff: response });
        } catch (error) {
            next(error);
        }
    }
);

export default router;
