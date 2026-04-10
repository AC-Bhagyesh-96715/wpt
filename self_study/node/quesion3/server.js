const http = require('http');
const productRoutes = require('./routes/productRoutes');

const server = http.createServer((req, res) => {
    productRoutes(req, res);
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});