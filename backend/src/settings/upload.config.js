import multer from "multer";
import path from "node:path";
import crypto from "node:crypto";

//Storage 
const storage = multer.diskStorage({
    destination: (_req, _file, cb) => {
        cb(null, "src/uploads");
    },
    filename: (_req, file, cb) => {
        const filename = crypto.randomUUID().toString() + path.extname(file.originalname);
        cb(null, filename);
    }
});

//Limits
const maxMb=20;
const limits = {
    fileSize: 1024 * 1024 * maxMb
};

//Filters
const fileFilter = (_req, file, cb) => {
const fileTypes = /jpeg|jpg|png|gif|webp/;
const allowExtname = fileTypes.test(path.extname(file.originalname));
if (!allowExtname) {
    return cb(new Error(`Only ${fileTypes} files are allowed!`));
}
return cb(null, true);
};

export const upload = multer({ storage, limits, fileFilter});