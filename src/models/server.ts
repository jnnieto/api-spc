import express, { Application }from "express";
import cors from "cors";
import morgan from "morgan";
import productRouter from "../routes/products.routes";

class Server {

    private app: Application;

    private readonly port: string;

    private apiPaths = {
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
    }

    private routes() {
        this.app.use(this.apiPaths.products, productRouter);
    }

    listen(): void {
        this.app.listen(this.port, () => console.log('Server running on port:', this.port));
    }

}

export default Server;
