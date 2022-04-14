import { NextFunction, Request, Response } from "express";

export const errorHandler = (err: Error, req: any, res: any) => {
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


