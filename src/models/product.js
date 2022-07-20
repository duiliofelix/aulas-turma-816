import mongoose from 'mongoose';

const ProductModel = mongoose.model('Product', {
    name: String,
    categoria: String,
    precoCliente: Number,
    precoCusto: Number,
});

export const buscarUmProduto = async (id) => {
    return await ProductModel.findById(id);
};

export const buscarTodosProdutos = async () => {
    return await ProductModel.find();
};

export const salvarNovoPoduto = async (name, price) => {
    const newProduct = new ProductModel({
        name,
        precoCliente: price * 10,
        precoCusto: price,
    });

    await newProduct.save()

    return newProduct;
};

export const atualizarProduto = async (id, name, price) => {
    const product = await ProductModel.findById(id);

    product.name = name;
    product.precoCliente = price * 10;
    product.precoCusto = price;

    await product.save();

    return product;
};

export const removerProduto = async (id) => {
    await ProductModel.findByIdAndDelete(id);
};
