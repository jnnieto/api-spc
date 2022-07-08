import express from "express";
import hbs from "hbs";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config"

import { boomErrorHandler, errorHandler } from "./middlewares/error.handler";
import { routerApi } from "./routes";

const app = express();
const port = process.env.PORT || 8080;

const whitelist = ['http://localhost:4200', 'https://api-proyecto-spc.herokuapp.com'];
app.use(express.json());
app.use(cors());
app.use(morgan('dev'))

// Express Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials('views/partials');

// Espress static folder
app.use(express.static("public"));

routerApi(app);

app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
    console.log('Server running on port: ' +  port);
});
