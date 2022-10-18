import { Request, Response, Router } from "express";
import * as path from "path";

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "../../public", "index.html"))
});

export default router;
