import { Router } from 'express';

const productRouter = new Router();

let proxId = 6;
const produtos = [
    { id: 1, name: 'vassoura' },
    { id: 2, name: 'pá' },
    { id: 3, name: 'balde' },
    { id: 4, name: 'lixo' },
    { id: 5, name: 'rodo' },
];

// CRUD - Create, Read, Update, Delete

// Read
productRouter.get('/', (req, res) => {
    res
        .status(200)
        .json(produtos);
});

// Create
productRouter.post('/', (req, res) => {
    const name = req.body.name;

    const newProduct = {
        id: proxId,
        name,
    };
    produtos.push(newProduct);
    proxId += 1;

    res
        .status(201)
        .json(newProduct);
});

// Update
productRouter.put('/:id', (req, res) => {
    const id = req.params.id;
    const name = req.body.name;

    produtos[id - 1].name = name;
    
    res
        .status(200)
        .json(produtos[id - 1]);
});

// Delete
productRouter.delete('/:id', (req, res) => {
    const id = req.params.id;

    delete produtos[id - 1];

    res
        .status(200)
        .send('ok');
});

export default productRouter;
