const url = require('url');
const {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/productController');

// helper to parse body
function parseBody(req, callback) {
    let body = '';

    req.on('data', chunk => {
        body += chunk.toString();
    });

    req.on('end', () => {
        try {
            callback(JSON.parse(body));
        } catch {
            callback({});
        }
    });
}

function productRoutes(req, res) {

    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const method = req.method;

    res.setHeader('Content-Type', 'application/json');

    if (path === '/products' && method === 'GET') {
        getAllProducts(req, res);
    }

    else if (path.startsWith('/products/') && method === 'GET') {
        const id = parseInt(path.split('/')[2]);
        getProductById(req, res, id);
    }

    else if (path === '/products' && method === 'POST') {
        parseBody(req, (body) => {
            createProduct(req, res, body);
        });
    }

    else if (path.startsWith('/products/') && method === 'PUT') {
        const id = parseInt(path.split('/')[2]);

        parseBody(req, (body) => {
            updateProduct(req, res, id, body);
        });
    }

    else if (path.startsWith('/products/') && method === 'DELETE') {
        const id = parseInt(path.split('/')[2]);
        deleteProduct(req, res, id);
    }

    else {
        res.statusCode = 404;
        res.end(JSON.stringify({ message: "Route not found" }));
    }
}

module.exports = productRoutes;