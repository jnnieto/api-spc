import express from "express";
import hbs from "hbs";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config"

import { boomErrorHandler, errorHandler } from "./middlewares/error.handler";
import { routerApi } from "./routes";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

const whitelist = ['http://localhost:4200', 'https://api-proyecto-spc.herokuapp.com'];
const options = {
    origin: (origin: any, callback: any) => {
        if (whitelist.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('no permitido'));
        }
    }
}
app.use(cors(options));
app.use(morgan('dev'))

routerApi(app);
// Express Handlebars
app.set('view engine', 'hbs');

hbs.registerPartials('views/partials');
// Espress static folder

app.use(express.static("public"));

app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
    console.log('Server running on port: ' +  port);
});
