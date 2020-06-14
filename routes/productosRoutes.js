const express = require('express');
const ctrlProductos = require('../controllers/productosController');

var router = express.Router();

router.get('/productos', ctrlProductos.allProductos);
router.get('/productos/:id/get', ctrlProductos.getProductoById);
router.post('/productos/add', ctrlProductos.insertProducto);
router.put('/productos/:id/update', ctrlProductos.updateProducto);
router.delete('/productos/:id/delete', ctrlProductos.deleteProducto);
router.patch('/productos/:id/updateStatus', ctrlProductos.updateStatus);

module.exports= router;
