import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

export const errorHandler = (err: TypeError, req: Request, res: Response) => {
    console.log(res)
    console.log('Entro al erro')
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    })
}

export const boomErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    if (err.isBoom) {
        const { output } = err;
        res.status(output.statusCode).json(output.payload);
    }
    next(err);
}

