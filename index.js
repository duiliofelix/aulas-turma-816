import express from 'express';

const server = express();

server.get('/produto/vassoura', (request, response) => {
    const cor = request.query.cor;

    response
        .status(201)
        .send('vassoura vermelha');
});


server.delete('/produto/vassoura', (request, response) => {
    const cor = request.query.cor;

    response
        .status(202)
        .send('deletei a vassoura');
});



server.listen(3000, () => {
    console.log('oi, estou funcionando');
});


