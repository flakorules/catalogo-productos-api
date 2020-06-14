const mongoose = require('mongoose');

const Producto = mongoose.model('Producto', {
    nombre: String,
    descripcion: String,
    precio: Number,
    estado: Boolean
});

module.exports = Producto;