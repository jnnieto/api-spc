import dotenv from 'dotenv';
import express from "express";
import cors from "cors";
import morgan from "morgan";

import { boomErrorHandler, errorHandler } from "./middlewares/error.handler";
import {routerApi} from "./routes";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

const whitelist = ['http://localhost:4200', 'https://myapp.co'];
// const options = {
//     origin: (forceConsistentCasingInFileNames: any, callback: any) => {
//         if (whitelist.includes(origin) || !origin) {
//             callback(null, true);
//         } else {
//             callback(new Error('no permitido'));
//         }
//     }
// }
app.use(cors());
app.use(morgan('dev'))

routerApi(app);

app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
    console.log('Server running on port: ' +  port);
});
