import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

export const boomErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    if (err.isBoom) {
        const { output } = err;
        res.status(output.statusCode).json(output.payload);
    }
    next(err);
}

export const errorHandler: ErrorRequestHandler = (err: any, req: Request, res: Response) => {
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    })
}

