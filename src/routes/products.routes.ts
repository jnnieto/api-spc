import { Router } from "express";
import * as productsController from "../controllers/products.controller";


const router: Router = Router();

router.get('', productsController.getAllProducts);
router.put('/:id/productive-status', productsController.updateAvailableDate);

export default router;
