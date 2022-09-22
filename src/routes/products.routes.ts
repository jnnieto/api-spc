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
 *      tags: [Product]
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
)

/**
 * @swagger
 * /products/productive-status/{id}:
 *  put:
 *      summary: Cambiar el estado productivo del producto disponible en la fecha actual
 *      tags: [Product]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *                type: string
 *            required: true
 *            description: Id del producto
 *      responses:
 *          200:
 *              description: Producto con estado productivo actualizado
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Product'
 *          404:
 *              description: Producto no encontrado
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/NotFound'
 *                      example:
 *                          statusCode: 404
 *                          error: Not Found
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
 *                          stack: /products/productive-status/:id
 */
router.put('/productive-status/:id', [
    check('id', 'El id de la orden es obligatoria').not().isEmpty(),
    check('id', 'El id debe tener un mínimo 25 y máximo 30 caracteres').isLength({ min: 25, max: 30 }),
    validateFields
    ],
    async (req: Request, res: Response, next: NextFunction) => {
        try {

            const { id } = req.params;
            const product = await productsController.updateAvailableDate(id);
            res.status(200).json(product);

        } catch (err) {
            next(err);
        }
    });

export default router;
