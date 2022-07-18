let proxId = 6;
const produtos = [
    { id: 1, name: 'vassoura', categoria: 'limpeza', precoCliente: 200, precoCusto: 10  },
    { id: 2, name: 'pá', categoria: 'limpeza', precoCliente: 200, precoCusto: 10  },
    { id: 3, name: 'balde', categoria: 'limpeza', precoCliente: 200, precoCusto: 10  },
    { id: 4, name: 'lixo', categoria: 'limpeza', precoCliente: 200, precoCusto: 10  },
    { id: 5, name: 'rodo', categoria: 'limpeza', precoCliente: 200, precoCusto: 10 },
];

export const buscarUmProduto = (id) => {
    return produtos.find((ele) => (ele.id === id));
};

export const buscarTodosProdutos = () => {
    return produtos;
};

export const salvarNovoPoduto = (name, price) => {
    const newProduct = {
        id: proxId,
        name,
        categoria: null,
        precoCliente: price * 10,
        precoCusto: price,
    }

    produtos.push(newProduct);
    proxId += 1;

    return newProduct;
};

export const atualizarProduto = (id, name, price) => {
    const product = produtos.find((prod) => (prod.id === id));

    product.name = name;
    product.precoCliente = price * 10;
    product.precoCusto = price;

    return product;
};

export const removerProduto = (id) => {
    const index = produtos.findIndex((prod) => (prod.id === id));
    delete produtos[index];
};
