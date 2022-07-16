import { Router } from 'express';
import { atualizarProduto, buscarProdutos, removerProduto, salvarNovoPoduto } from '../models/product.js';

const productRouter = new Router();

// CRUD - Create, Read, Update, Delete

// Read
productRouter.get('/:id?', (req, res) => {
    if (req.params.id) {
        res
            .status(200)
            .json(buscarProdutos(req.params.id));

        return;
    }
    
    res
        .status(200)
        .json(buscarProdutos());
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
