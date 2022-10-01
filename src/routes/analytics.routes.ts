import {AnalyticsController} from "../controllers/analytics.controller";
import {NextFunction, Request, Response, Router} from "express";


const analyticsController = new AnalyticsController();
const router: Router = Router();

/**
 * @swagger
 * /analytics/admin-news:
 *  get:
 *      summary: Obtener las novedades del administrador
 *      tags: [Analytics]
 *      responses:
 *          200:
 *              description: Novedades del administrador en cuanto a la cantidad de usuario a verificar y pqrs que responder
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              users:
 *                                  type: integer
 *                                  description: Cantidad de usuario a verificar
 *                              pqrs:
 *                                  type: integer
 *                                  description: Cantidad de PQRs a responder
 *                      example:
 *                          users: 3
 *                          pqrs: 5
 *          500:
 *              description: Server error
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/ServerError'
 *                      example:
 *                          message: Server error
 *                          stack: /analytics/admin-news
 */
router.get('/admin-news',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const response = await analyticsController.adminNews();
            res.status(200).json(response);
        } catch (e) {
            next(e);
        }
    }
);

/**
 * @swagger
 * /analytics/recent-products:
 *  get:
 *      summary: Obtener la lista de productos recientemente solicitados
 *      tags: [Analytics]
 *      responses:
 *          200:
 *              description: Lista de productos que han sido solicitados
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/RecentProduct'
 *          500:
 *              description: Server error
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/ServerError'
 *                      example:
 *                          message: Server error
 *                          stack: /analytics/recent-products
 */
router.get('/recent-products',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const response = await analyticsController.productsRecentlyPurchased();
            res.status(200).json(response);
        } catch (e) {
            next(e);
        }
    }
);

/**
 * @swagger
 * /analytics/users-by-type:
 *  get:
 *      summary: Obtener cantidad de usuarios por rol
 *      tags: [Analytics]
 *      responses:
 *          200:
 *              description: Cantidad de usuario por rol obtenido satisfactoriamente
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              producers:
 *                                  type: integer
 *                                  description: Cantidad de productores registrados
 *                              consumers:
 *                                  type: integer
 *                                  description: Cantidad de consumidores registrados
 *                              carriers:
 *                                  type: integer
 *                                  description: Cantidad de transportadores registrados
 *                      example:
 *                          producers: 3
 *                          consumers: 5
 *                          carriers: 4
 *          500:
 *              description: Server error
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/ServerError'
 *                      example:
 *                          message: Server error
 *                          stack: /analytics/users-by-type
 */
router.get('/users-by-type',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const users = await analyticsController.usersByType();
            res.status(200).json(users);
        } catch (e) {
            next(e);
        }
    }
);

/**
 * @swagger
 * /analytics/users:
 *  get:
 *      summary: Obtener la cantidad de usuarios registrados
 *      tags: [Analytics]
 *      responses:
 *          200:
 *              description: Número de usuarios registrados obtenidos satisfactoriamente
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: integer
 *                      example: 10
 *          500:
 *              description: Server error
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/ServerError'
 *                      example:
 *                          message: Server error
 *                          stack: /analytics/users
 */
router.get('/users',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const users = await analyticsController.usersQuantity();
            res.status(200).json(users);
        } catch (e) {
            next(e);
        }
    }
);

/**
 * @swagger
 * /analytics/users:
 *  get:
 *      summary: Obtener la cantidad de productos registrados
 *      tags: [Analytics]
 *      responses:
 *          200:
 *              description: Número de productos registrados obtenidos satisfactoriamente
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: integer
 *                      example: 50
 *          500:
 *              description: Server error
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/ServerError'
 *                      example:
 *                          message: Server error
 *                          stack: /analytics/products
 */
router.get('/products',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const products = await analyticsController.productsQuantity();
            res.status(200).json(products);
        } catch (e) {
            next(e);
        }
    }
);

/**
 * @swagger
 * /analytics/products-by-type:
 *  get:
 *      summary: Obtener cantidad de productos por tipo
 *      tags: [Analytics]
 *      responses:
 *          200:
 *              description: Cantidad de productos por tipo obtenidos satisfactoriamente
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              frutas:
 *                                  type: integer
 *                                  description: Cantidad de frutas registradas
 *                              hortalizas:
 *                                  type: integer
 *                                  description: Cantidad de hortalizas registradas
 *                              tuberculos:
 *                                  type: integer
 *                                  description: Cantidad de tubérculos registrados
 *                              granos:
 *                                  type: integer
 *                                  description: Cantidad de granos registrados
 *                              hierbas-y-aromaticas:
 *                                  type: integer
 *                                  description: Cantidad de hierbas y aromáticas registradas
 *                      example:
 *                          frutas: 3
 *                          hortalizas: 5
 *                          tuberculos: 4
 *                          hierbas-y-aromaticas: 10
 *                          granos: 1
 *          500:
 *              description: Server error
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/ServerError'
 *                      example:
 *                          message: Server error
 *                          stack: /analytics/users-by-type
 */
router.get('/products-by-type',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const products = await analyticsController.productsQuantityByType();
            res.status(200).json(products);
        } catch (e) {
            next(e);
        }
    }
);

export default router;
