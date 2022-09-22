import express, {Application, Request, Response} from "express";

import analyticsRoutes from "./analytics.routes";
import serverRoutes from "./server.routes";
import notificationsRoutes from "./notifications.routes";
import ordersRoutes from "./orders.routes";
import productsRoutes from "./products.routes";
import swaggerUI from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import {options} from "../helpers/swaggerOptions";


const specs = swaggerJSDoc(options);

export const routerApi = (app: Application) => {
    // tslint:disable-next-line:no-shadowed-variable
    const router = express.Router();

    /**
     * Rutas del de los handlebars
     */
    app.use('/', serverRoutes);

    /**
     * Rutas de la API
     */
    app.use('/api', router);

    /**
     * @swagger
     * components:
     *  schemas:
     *      Product:
     *          type: object
     *          properties:
     *              id:
     *                  type: string
     *                  description: El id del producto
     *              name:
     *                  type: string
     *                  description: El nombre del producto
     *              idProducer:
     *                  type: string
     *                  description: El id del productor dueño del producto
     *              image:
     *                  type: string
     *                  description: El link de la imagen del producto
     *              productType:
     *                  type: string
     *                  description: El tipo del producto { 'Frutas , 'Hotalizas', 'Tubérculos'}
     *              price:
     *                  type: integer
     *                  description: El precio por unidad del producto
     *              unit:
     *                  type: string
     *                  description: El unidad de medida el producto
     *              stock:
     *                  type: integer
     *                  description: La cantidad de prodycto que se encuentra disponible
     *              productiveStatus:
     *                  type: string
     *                  description: El estado productivo del producto -> En cosecha o Disponible
     *              availabilityDate:
     *                  type: date
     *                  description: La fecha disponibilidad del producto en caso de que esté en cosecha
     *          example:
     *              id: 5aojBhTbv16es0l1Es7n
     *              name: Arracacha
     *              idProducer: U32wCmkEkYPbU4KVfCaXgWI518l2
     *              image: Arracacha
     *              productType:
     *              price: 20
     *              unit: Arroba
     *              stock: 45
     *              productiveStatus: Disponible
     *              availabilityDate: null
     *      NotFound:
     *          type: object
     *          properties:
     *              statusCode:
     *                  type: integer
     *                  description: Status code server response (404)
     *              error:
     *                  type: string
     *                  description: Not found message error
     *              message:
     *                  type: string
     *                  description: Message error document not found
     *      ServerError:
     *          type: object
     *          properties:
     *              message:
     *                  type: string
     *                  description: Message server error
     *              stack:
     *                  type: string
     *                  description: Route server error
     */
    router.use('/products', productsRoutes);

    /**
     * @swagger
     * tags:
     *  name: Orders
     *  description: Orders endpoints
     */
    router.use('/orders', ordersRoutes);

    /**
     * @swagger
     * tags:
     *  name: Notifications
     *  description: Notifications endpoints
     */
    router.use('/notifications', notificationsRoutes)

    /**
     * @swagger
     * tags:
     *  name: Analytics
     *  description: Analytics endpoints
     */
    router.use('/analytics', analyticsRoutes);

    /**
     * Documentación de la API con Swagger
     */
    app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));

}
