import {AnalyticsController} from "../controllers/analytics.controller";
import {NextFunction, Request, Response, Router} from "express";


const analyticsController = new AnalyticsController();

const router: Router = Router();

router.get('/admin-news',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const response = await analyticsController.adminNews();
            res.status(200).json(response);
        } catch (e) {
            next(e);
        }
    }
);

router.get('/recent-products',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const response = await analyticsController.productsRecentlyPurchased();
            res.status(200).json(response);
        } catch (e) {
            next(e);
        }
    }
);

router.get('/users-by-type',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const users = await analyticsController.usersByType();
            res.status(200).json(users);
        } catch (e) {
            next(e);
        }
    }
);

router.get('/users',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const users = await analyticsController.usersQuantity();
            res.status(200).json(users);
        } catch (e) {
            next(e);
        }
    }
);

router.get('/products',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const products = await analyticsController.productsQuantity();
            res.status(200).json(products);
        } catch (e) {
            next(e);
        }
    }
);

router.get('/products-by-type',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const products = await analyticsController.productsQuantityByType();
            res.status(200).json(products);
        } catch (e) {
            next(e);
        }
    }
);

export default router;
