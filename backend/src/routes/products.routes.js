import { Router } from "express";
import { uploadImage} from "../middlewares/upload.middleware.js";

const productsRouter = Router();

productsRouter.post('/', uploadImage("product"), (req, res) => {
    console.log(req.body);

    res.status(201).json({
        msg: 'Producto creado correctamente',
    });
});

export {productsRouter} ;