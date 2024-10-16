import { product } from "../dataBase/db.js";

const createProduct = (req, res) => {
    const { name, description, price, stock } = req.body;

    if (!name || !description || !price ) {
        return res.status(400).json({ message: "Todos los campos tienen que ser completados" });
    }

    if (!req.file) {
        return res.status(400).json({ message: "La imagen debe estar subida" });
    }

    const newProduct = {
        name,
        description,
        price,
        imageUrl: `/uploads/${req.file.filename}`, 
    };

    product.push(newProduct);
    
    res.status(201).json({
        message: "Product created successfully",
        product: newProduct
    });
};

export { createProduct };
