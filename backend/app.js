import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { productsRouter } from './src/routes/products.routes.js';
import path from 'node:path';

const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.static(path.join(path.resolve(),'src','uploads')));

//Routes
app.use('/api/products',productsRouter);

//Server
app.listen(4000, () => {
    console.log('Servervidor corriente en el puerto 4000')
});



