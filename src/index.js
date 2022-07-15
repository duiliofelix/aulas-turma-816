import express from 'express';
import { cartRouter, productRouter } from './routes/index.js';

const PORT = 3000;

const server = express();

server.use(express.json());
server.use('/product', productRouter);
server.use('/cart', cartRouter);

server.listen(PORT, () => {
    console.log(`oi, estou funcionando na port ${PORT}`);
});
