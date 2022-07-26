import { Router } from 'express';
import ProductDTO from '../views/productDTO.js';
import {
    atualizarProduto,
    buscarUmProduto,
    buscarTodosProdutos,
    removerProduto,
    salvarNovoPoduto,
} from '../models/product.js';

const productRouter = new Router();

// CRUD - Create, Read, Update, Delete

// Read
productRouter.get('/:id?', async (req, res) => {
    const { id } = req.params;

    if (id) {
        const produto = await buscarUmProduto(id);
        if (!produto) {
            res.status(200).send();
            return;
        }

        const dto = new ProductDTO(produto);

        res
            .status(200)
            .json(dto.toJson());

        return;
    }
    
    const listaDeDTOs = await buscarTodosProdutos()
        .map((produto) => {
            const dto = new ProductDTO(produto);
            return dto.toJson();
        });

    res
        .status(200)
        .json(listaDeDTOs);
});

// Create
productRouter.post('/', async (req, res) => {
    const { name, price } = req.body;

    if (!name || !price) {
        res.send(400).send('Falta parâmetros');
        return;
    }

    const newProduct = salvarNovoPoduto(name, price);

    res
        .status(201)
        .json(newProduct);
});

// Update
productRouter.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;

    const produto = await atualizarProduto(id, name, price);
    
    res
        .status(200)
        .json(produto);
});

// Delete
productRouter.delete('/:id', async (req, res) => {
    const { id } = req.params;

    await removerProduto(id);

    res
        .status(200)
        .send('ok');
});

export default productRouter;
