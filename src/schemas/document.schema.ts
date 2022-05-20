import Joi from "joi";

const id = Joi.string().length(20);

export const getIdDocument = Joi.object({
   id: id.required()
});
