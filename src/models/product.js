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

export const salvarNovoPoduto = () => {};
export const atualizarProduto = () => {};
export const removerProduto = () => {};
