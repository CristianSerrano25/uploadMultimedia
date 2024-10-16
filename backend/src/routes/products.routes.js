import { Router } from "express";
import { uploadImage } from "../middlewares/upload.middleware.js";  
import { createProduct } from "../controllers/pruducts.controllers.js";

const productsRouter = Router();

productsRouter.post('/', uploadImage("product"), createProduct);

export { productsRouter };
