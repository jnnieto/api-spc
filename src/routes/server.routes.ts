import { Request, Response, Router } from "express";

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    res.render('index', {
        nombre: 'Bienvenido a la API del Proyecto SPC',
        title: 'API Proyecto SPC'
    })
});

export default router;
