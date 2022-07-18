class ProductDTO {
    constructor(produto) {
        this.id = produto.id;
        this.name = produto.name;
        this.preco = produto.precoCliente;
    }

    toJson() {
        return {
            id: this.id,
            name: this.name,
            preco: this.preco,
        }
    }
}

export default ProductDTO;
