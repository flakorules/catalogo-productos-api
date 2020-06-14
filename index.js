const mongoose = require('mongoose');
const app = require('./app');
const Constantes = require('./assets/constants');

console.log(Constantes.mongo.url);

const mongoSettings = { useUnifiedTopology: true, useNewUrlParser: true };

mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;

mongoose.connect(Constantes.mongo.url, mongoSettings).then(()=>{
    console.log('Coneccion exitosa a la Base de Datos');
    app.listen(Constantes.apiServer.port, ()=>{
        console.log(Constantes.apiServer.URL);
    })
});
