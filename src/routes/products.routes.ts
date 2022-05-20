import { Router } from "express";
import * as productsController from "../controllers/products.controller";
import validatorHandler from "../middlewares/validator.handler";
import {getIdDocument} from "../schemas/document.schema";

const router: Router = Router();

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
 *              description: Error de servidor
 */
router.get('', productsController.getAllProducts);

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
 *                          $ref: '#/components/schemas/Product'
 *          500:
 *              description: Error de servidor
 */
router.put('/productive-status/:id',
    validatorHandler(getIdDocument, 'params'),
    productsController.updateAvailableDate);

export default router;
