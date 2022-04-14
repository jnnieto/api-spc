import express, { Application }from "express";
import cors from "cors";
import morgan from "morgan";
import productRouter from "../routes/products.routes";
import ordersRoutes from "../routes/orders.routes";
import {boomErrorHandler, errorHandler} from "../middlewares/error.handler";

class Server {

    private app: Application;

    private readonly port: string;

    private apiPaths = {
        orders: "/api/orders",
        products: "/api/products"
    }

    constructor() {
        this.app = express();
        this.app.use(cors());
        this.port = '8080';
        this.middlewares();
        this.routes();
    }

    private middlewares(): void {
        this.app.use(morgan('dev'));
        // this.app.use(boomErrorHandler);
        // (this.app.use(errorHandler);
    }

    private routes() {
        this.app.use(this.apiPaths.orders, ordersRoutes);
        this.app.use(this.apiPaths.products, productRouter);
    }

    listen(): void {
        this.app.listen(this.port, () => console.log('Server running on port:', this.port));
    }

}

export default Server;
