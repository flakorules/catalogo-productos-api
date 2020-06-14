exports.HTTPCodes = 
{
    GET:200,
    POST:201,
    PUT:204,
    PATCH:204,
    DELETE:204
}

const port= 3000;
/* Reemplazar con los datos configurados en la nube de mongoose */
const mongoUser = "<usr>"; 
const mongoPassword = "<psw>";
const mongoDataBase = "<db>";

exports.mongo = {
    url:`mongodb+srv://${mongoUser}:${mongoPassword}@cluster0-066qu.gcp.mongodb.net/${mongoDataBase}?retryWrites=true&w=majority`
} 

exports.apiServer = {
    port: port,
    URL: `http://localhost:${port}`
    /*
    La url para poder conectar la api a mongoose se obtiene en: Clusters -> Connect -> Conect your application
    */
}




