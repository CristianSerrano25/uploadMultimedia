import { Router } from "express";
import { uploadImage } from "../middlewares/upload.middleware.js";  
import { createProduct } from "../controllers/pruducts.controllers.js";
import { applyValidations } from "../middlewares/applyValidations.middleware.js";
import { createProductSchema } from "../validations/product.valitatios.js";

const productsRouter = Router();

productsRouter.post('/', uploadImage("product"),applyValidations(createProductSchema), createProduct);

export { productsRouter };
