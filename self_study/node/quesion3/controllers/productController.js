const products = require('../data/products');

// GET all products
function getAllProducts(req, res) {
    res.end(JSON.stringify(products));
}

// GET single product
function getProductById(req, res, id) {
    const product = products.find(p => p.id === id);

    if (!product) {
        res.statusCode = 404;
        return res.end(JSON.stringify({ message: "Product not found" }));
    }

    res.end(JSON.stringify(product));
}

// POST add product
function createProduct(req, res, body) {
    if (!body.name || !body.price) {
        res.statusCode = 400;
        return res.end(JSON.stringify({ message: "Invalid data" }));
    }

    const newProduct = {
        id: products.length + 1,
        name: body.name,
        price: body.price
    };

    products.push(newProduct);
    res.end(JSON.stringify(newProduct));
}

// PUT update product
function updateProduct(req, res, id, body) {
    const product = products.find(p => p.id === id);

    if (!product) {
        res.statusCode = 404;
        return res.end(JSON.stringify({ message: "Product not found" }));
    }

    product.name = body.name || product.name;
    product.price = body.price || product.price;

    res.end(JSON.stringify(product));
}

// DELETE product
function deleteProduct(req, res, id) {
    const index = products.findIndex(p => p.id === id);

    if (index === -1) {
        res.statusCode = 404;
        return res.end(JSON.stringify({ message: "Product not found" }));
    }

    const deleted = products.splice(index, 1);
    res.end(JSON.stringify(deleted[0]));
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};