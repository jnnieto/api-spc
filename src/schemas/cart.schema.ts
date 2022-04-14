import Joi from "joi";

const id = Joi.string().min(20);
const availabilityDate = Joi.date();
const description = Joi.string();
const farm = Joi.string().min(5);
const image = Joi.string().min(10);
const name = Joi.string().min(1);
const price = Joi.number().min(0);
const productType = Joi.string().min(3).max(15);
const productiveStatus = Joi.string().min(3).max(15);
const stock = Joi.number().min(1);
const unit = Joi.string().min(2).max(10);
const quantity = Joi.number().min(1);
const subtotal = Joi.number().min(1);


export const getCartConsumer = Joi.object({
    id: id.required(),
    // product: Joi.object({
    //     availabilityDate,
    //     description,
    //     farm: farm.required(),
    //     id: id.required(),
    //     idProducer: id.required(),
    //     image,
    //     name: name.required(),
    //     price: price.required(),
    //     productType: productType.required(),
    //     productiveStatus: productiveStatus.required(),
    //     stock: stock.required(),
    //     unit: unit.required()
    // }),
    // quantity: quantity.required(),
    // subtotal: subtotal.required()
});

