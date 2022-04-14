import express, {Application} from "express";
import ordersRoutes from "./orders.routes";
import productsRoutes from "./products.routes";

export const routerApi = (app: Application) => {
    const router = express.Router();
    app.use('/api', router);
    router.use('/products', productsRoutes);
    router.use('/orders', ordersRoutes);
}
