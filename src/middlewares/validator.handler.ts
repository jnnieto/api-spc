import boom from '@hapi/boom';
import { Schema } from "joi";
import { NextFunction, Request, Response } from "express";

const validatorHandler = (schema: Schema, property: string) => {
    return (req: Request, res: Response, next: NextFunction) => {
        // @ts-ignore
        const data = req[property];
        const { error } = schema.validate(data, { abortEarly: false });
        if (error) {
            next(boom.badRequest(error.name));
        }
        next();
    }
}

export default validatorHandler;
