import express, { Application }from "express";
import router from "../routes/products.routes";

class Server {

    private app: Application;

    private port: string;

    private apiPaths = {
        products: "/api/products"
    }

    constructor() {
        this.app = express();
        this.port = '8080';
        this.routes();
    }

    routes() {
        this.app.use(this.apiPaths.products, router);
    }

    listen(): void {
        this.app.listen(this.port, () => console.log('Server running on port:', this.port));
    }

}

export default Server;
