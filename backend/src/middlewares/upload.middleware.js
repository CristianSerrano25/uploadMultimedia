import { upload } from "../settings/upload.config.js";

export const uploadImage = ( filename ) => (req, res, next) => {

    const uploadSingle = upload.single(filename);

    uploadSingle(req, res, (error) => {
        if (error) {
            console.log(error);
            return res.status(400).json({ message: "Error al subir la imagen" });
        }
        if (!req.file) {
            return res.status(400).json({ message: "No se ha subido ninguna imagen" });
        }

        req.body[filename] = req.file.filename;

        next();
    });
};

