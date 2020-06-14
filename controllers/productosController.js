
const Producto = require('../models/producto');
const Constantes = require('../assets/constants');

exports.allProductos = async (req,res) =>
{    
    await Producto.find({}, (err,data)=>{
        res.status(Constantes.HTTPCodes.GET).send(data); 
    });
}

exports.getProductoById = (req,res) =>
{
    const { id } = req.params;    
    Producto.findById(id, (err,data)=>{
        res.status(Constantes.HTTPCodes.GET).send(data);
    });
}

exports.insertProducto = async (req,res) =>
{       
    const {body} = req;
    const obj = new Producto(body);
    await obj.save();
    res.status(Constantes.HTTPCodes.POST).send(obj);
}

exports.updateProducto = async (req,res) =>
{
    const { id } = req.params;
    const { body } = req;
    await Producto.updateOne({_id:id},body);
    res.status(Constantes.HTTPCodes.PUT).send();
}

exports.deleteProducto = async (req,res) =>
{
    const { id } = req.params;
    console.log(id);
    await Producto.deleteOne({_id:id});
    res.status(Constantes.HTTPCodes.DELETE).send();
}

exports.updateStatus = async (req,res) =>
{
    const { id } = req.params;
    const { body } = req;    
    await Producto.updateOne({_id:id},body);
    res.status(Constantes.HTTPCodes.PATCH).send();
}