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
     *      Address:
     *          type: object
     *          properties:
     *              address:
     *                  type: string
     *                  description: La dirección de envío del pedido
     *              municipality:
     *                  type: string
     *                  description: El municipio de la dirección de envío del pedido
     *              phone:
     *                  type: integer
     *                  description: Teléfono del consumidor asociado al pedido
     *              additionalInfo:
     *                  type: string
     *                  required: false
     *                  description: Información adicional sobre el pedido
     *              id:
     *                  type: string
     *                  description: Id de la dirección del pedido
     *          example:
     *              address: Calle 7 #104-45
     *              municipality: Bogotá D.C
     *              phone: 3145678942
     *              additionalInfo: Tercer piso
     *              id: 5aojBhTbv16es0l1Es7n
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
     *              productType: Tubérculos
     *              price: 20
     *              unit: Arroba
     *              stock: 45
     *              productiveStatus: Disponible
     *              availabilityDate: null
     *      ProductOrder:
     *          type: object
     *          properties:
     *              id:
     *                  type: string
     *                  description: Id del producto
     *              name:
     *                  type: string
     *                  description: Nombre del producto
     *              quantity:
     *                  type: integer
     *                  description: Cantidad de producto solicitado en el pedido
     *              unit:
     *                  type: string
     *                  description: Unidad de medida del producto
     *              subtotal:
     *                  type: integer
     *                  description: Valor a pagar por cada tipo de producto
     *              image:
     *                  type: string
     *                  description: Imagen del producto solicitado
     *          example:
     *              id: 5aojBhTbv16es0l1Es7n
     *              name: Limón
     *              quantity: 4
     *              unit: Kilo
     *              subtotal: 45000
     *              image: https://firebasestorage.googleapis.com/v0/b/bdproyectospc.appspot.com/o/products%2FaFufACwuV6sxdXa1PlZy?alt=media&token=5bcd77ee-4950-4c79-8617-89b55eddef9d
     *      Order:
     *          type: object
     *          properties:
     *              id:
     *                  type: string
     *                  description: El id del pedido
     *              idProducer:
     *                  type: string
     *                  description: El id del productor que está asociado al pedido
     *              idConsumer:
     *                  type: string
     *                  description: El id del consumidor del pedido
     *              idCarrier:
     *                  type: string
     *                  required: false
     *                  description: El id del transportador que entregará el pedido
     *              orderDate:
     *                  type: object
     *                  description: La fecha en que se realizó el pedido
     *              products:
     *                  type: array
     *                  items:
     *                      $ref: '#/components/schemas/ProductOrder'
     *                  description: Lista de productos solicitados en el pedido
     *              address:
     *                  type: object
     *                  description: La dirección de entrega del pedido
     *                  $ref: '#/components/schemas/Address'
     *              total:
     *                  type: integer
     *                  description: Precio total del pedido
     *              chosenPayment:
     *                  type: object
     *                  description: Método de pago asociado al pedido
     *              status:
     *                  type: string
     *                  description: Estado del pedido
     *              paymentLimitDate:
     *                  type: date
     *                  required: false
     *                  description: Fecha límite de pago cuando está pendiente por pagar
     *              tariff:
     *                  type: integer
     *                  required: false
     *                  description: Tarifa de envío a pagar del pedido
     *          example:
     *              idProducer: 5aojBhTbv16es0l1Es7n
     *              idConsumer: 5aojBhTbv16es0l1Es7n
     *              orderDate: null
     *              total: 45000
     *              address:
     *                  address: Calle 7 #104-45
     *                  municipality: Bogotá D.C
     *                  phone: 3145678942
     *                  additionalInfo: Tercer piso
     *                  id: 5aojBhTbv16es0l1Es7n
     *              products:
     *                  id: 5aojBhTbv16es0l1Es7n
     *                  name: Limón
     *                  quantity: 4
     *                  unit: Kilo
     *                  subtotal: 45000
     *                  image: https://firebasestorage.googleapis.com/v0/b/bdproyectospc.appspot.com/o/products%2FaFufACwuV6sxdXa1PlZy?alt=media&token=5bcd77ee-4950-4c79-8617-89b55eddef9d
     *              chosenPayment:
     *              status: Pendiente de pago
     *              paymentLimitDate: null
     *              tariff: 10000
     *              idCarrier: 5aojBhTbv16es0l1Es7n
     *              id: 5aojBhTbv16es0l1Es7n
     *      OrderRequest:
     *          type: object
     *          properties:
     *              idProducer:
     *                  type: string
     *                  description: Id del productor del pedido a solicitar
     *              names:
     *                  type: string
     *                  description: Nombres del productor
     *              lastnames:
     *                  type: string
     *                  description: Apellidos del productor
     *              products:
     *                  type: array
     *                  items:
     *                      - $ref: '#/components/schemas/ProductOrder'
     *          example:
     *              idProducer: oHzwRWvGUXhFo09zayIfWQkicTh2
     *              names: Nicolás
     *              lastnames: Ramos
     *              products:
     *                  id: 5aojBhTbv16es0l1Es7n
     *                  name: Limón
     *                  quantity: 4
     *                  unit: Kilo
     *                  subtotal: 45000
     *                  image: https://firebasestorage.googleapis.com/v0/b/bdproyectospc.appspot.com/o/products%2FaFufACwuV6sxdXa1PlZy?alt=media&token=5bcd77ee-4950-4c79-8617-89b55eddef9d
     *      RecentProduct:
     *          type: object
     *          properties:
     *              name:
     *                  type: string
     *                  description: Nombre del producto
     *              quantity:
     *                  type: integer
     *                  description: Cantidad del producto solicitado
     *              subtotal:
     *                  type: integer
     *                  description: Valor total por cantidad de producto solicitado
     *              status:
     *                  type: string
     *                  description: Estado del pedido
     *              orderDate:
     *                  type: string
     *                  description: Fecha de solicitud de pedido
     *          example:
     *              name: Aguacate
     *              quantity: 3
     *              subtotal: 45000
     *              status: Pendiente de pago
     *              orderDate: 12/9/2022
     *      Route:
     *          type: object
     *          properties:
     *              routes:
     *                  type: array
     *                  description: Lista de las municipios por los que pasa la ruta
     *              destination:
     *                  type: string
     *                  description: Municipio donde termina la ruta
     *              origin:
     *                  type: string
     *                  description: Municipio donde empieza la ruta
     *              id:
     *                  type: string
     *                  description: Id de la ruta
     *              startHour:
     *                  type: string
     *                  description: Hora en que empieza la ruta
     *              servicesDays:
     *                  type: array
     *                  description: Días en que se recorre la ruta
     *          example:
     *              routes: [ "Madrid", "Mosquera", "Funza" ]
     *              destination: Funza
     *              origin: Madrid
     *              id: oHzwRWvGUXhFo09zayIfWQkicTh2
     *              startHour: 6:00AM
     *              servicesDays: [ "Lunes", "Martes", "Miércoles" ]
     *      TopMunicipality:
     *          type: object
     *          properties:
     *              name:
     *                  type: string
     *                  description: Nombre del municipio
     *              quantity:
     *                  type: string
     *                  description: Cantidad de productos que hay en el municipio
     *      User:
     *          type: object
     *          properties:
     *              typeuser:
     *                  type: string
     *                  description: Rol del usuario
     *              names:
     *                  type: string
     *                  description: Nombres del usuario
     *              lastnames:
     *                  type: string
     *                  description: Apellidos del usuario
     *              email:
     *                  type: string
     *                  description: Correo electrónico del usuario
     *              dateBirth:
     *                  type: object
     *                  properties:
     *                      _seconds:
     *                          type integer
     *                      _nanoseconds:
     *                          type: integer
     *              identificationType:
     *                  type: string
     *                  description: Tipo de identificación del usuario
     *              identification:
     *                  type: string
     *                  description: Número de identificación del usuario
     *              phone:
     *                  type: string
     *                  description: Teléfono del usuario
     *              municipality:
     *                  type: string
     *                  description: Municipio donde reside el usuario
     *              profileURL:
     *                  type: string
     *                  description: URL de la imagen de perfil del usuario
     *              isActive:
     *                  type: boolean
     *                  description: Variable que determina si el usuario está habilitado o deshabilitado
     *              isVerifiedPerson:
     *                  type: boolean
     *                  description: Variable que determina si el usuario está verificado por el administrador
     *              notificationToken:
     *                  type: string
     *                  description: Token de notificación de Firebase Messaging
     *              id:
     *                  type: string
     *                  description: Id de documento del usuario
     *          example:
     *              id: oHzwRWvGUXhFo09zayIfWQkicTh2
     *              typeuser: Transportador
     *              names: Nicolas
     *              lastnames: Nieto
     *              email: udec1345@gmail.com
     *              dateBirth:
     *                  _seconds: 110437200
     *                  _nanoseconds: 0
     *              identificationType: Cédula de ciudadanía
     *              identification: 10034567845
     *              phone: 3156789867
     *              municipality: Facatativá
     *              profileURL: https://algunaimagen.jpg
     *              isActive: true
     *              isVerifiedPerson: true
     *              notificationToken: eyysdkjfhsdkfefvdhljfadqwdñlfjo84534
     *      Vehicle:
     *          type: object
     *          properties:
     *              characteristics:
     *                  type: string
     *                  description: Descripción del vehículo
     *              maxCapacity:
     *                  type: integer
     *                  description: Capacidad máxima en kilos del vehículo
     *              id:
     *                  type: string
     *                  description: Id del vehículo
     *              licensePlate:
     *                  type: string
     *                  description: Placa del vehículo
     *              image:
     *                  type: string
     *                  description: URL de la imagen del vehículo
     *          example:
     *              characteristics: Consta de una caja aislante y consta con una fuente de frío (hielo o gas) que incorpora. Esta fuente permite disminuir y mantener la temperatura del interior de la caja.
     *              maxCapacity: 200
     *              id: oHzwRWvGUXhFo09zayIfWQkicTh2
     *              licensePlate: CVD-546
     *              image: https://algunaimagen.jpg
     *      ValidatorError:
     *          type: object
     *          properties:
     *              value:
     *                  type: string
     *                  description: Valor de la variable con error
     *              msg:
     *                  type: string
     *                  description: Mensaje del error de la validación
     *              param:
     *                  type: string
     *                  description: Nombre del campo con error
     *              location:
     *                  type: string
     *                  description: Ubicación del error
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

    /**
     * @swagger
     * tags:
     *  name: Products
     *  description: Products endpoints
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
