import { NextFunction, Request, Response, Router } from "express";
import { check } from "express-validator";

import { ProductController } from "../controllers/products.controller";
import { validateFields } from "../middlewares/validate-fields";
import { Order } from "../interfaces/order.interface";

const router: Router = Router();

const productsController = new ProductController();

/**
 * @swagger
 * /products:
 *  get:
 *      summary: Lista de productos registrados en SPC
 *      tags: [Products]
 *      responses:
 *          200:
 *              description: Lista de productos
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Product'
 *          500:
 *              description: Server error
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/ServerError'
 *                      example:
 *                          message: Server error
 *                          stack: /products
 */
router.get('',
    async (req: Request, res: Response, next: NextFunction) => {
        try {

            const products = await productsController.getAllProducts();
            res.status(200).json(products);

        } catch (err) {
            next(err);
        }
    });
/**
 * @swagger
 * /reduce-product-stock:
 *  put:
 *      summary: Reducir el stock del pedido solicitado
 *      tags: [Products]
 *      requestBody:
 *          description: El objeto del pedido para reducir el stock de cada producto solicitado
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Order'
 *      responses:
 *          200:
 *              description: Stock del producto restado satisfactoriamente
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: object
 *                                  $ref: '#/components/schemas/Product'
 *          404:
 *              description: Producto para reducir stock no encontrado
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/NotFound'
 *                      example:
 *                          statusCode: 400
 *                          error: Not found
 *                          message: Product not found
 *          500:
 *              description: Server error
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/ServerError'
 *                      example:
 *                          message: Server error
 *                          stack: /products/reduce-product-stock
 */
router.put('/reduce-product-stock',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const body = req.body as Order;
            const response = await productsController.reduceProductStock(body);
            res.status(200).json({ message: response });
        } catch (err) {
            next(err);
        }
    }
);

export default router;
