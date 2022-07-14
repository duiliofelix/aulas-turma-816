import { Router } from 'express';

const cartRouter = new Router();

cartRouter.get('/vassoura', (request, response) => {
    const cor = request.query.cor;

    response
        .status(201)
        .send('cart: assoura vermelha');
});

cartRouter.delete('/vassoura', (request, response) => {
    const cor = request.query.cor;

    response
        .status(202)
        .send('cart: deletei a vassoura');
});

export default cartRouter;
