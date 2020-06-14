const express = require('express');
const routes = require('./routes/productosRoutes');
const bodyParser = require('body-parser');

const app = express();
const cors = require ('cors');

// app.get("/productos", (req,res)=>{
//     res.send('aqui va la lista de productos');
// });

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(cors({origin:true}));
app.use('/api', routes);

module.exports=app;