import { Router } from 'express';

const productRouter = new Router();

productRouter.get('/vassoura', (request, response) => {
    const cor = request.query.cor;

    response
        .status(201)
        .send('vassoura vermelha');
});

productRouter.delete('/vassoura', (request, response) => {
    const cor = request.query.cor;

    response
        .status(202)
        .send('deletei a vassoura');
});

export default productRouter;
