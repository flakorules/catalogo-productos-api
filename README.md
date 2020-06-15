<<<<<<< HEAD
PREREQUISITOS
    1) Node JS Instalado
    2) Cuenta en MongoDB
    3) Tener creado un Cluster en MongoDB
    4) Crear un usuario con permisos de Lectura/Escriura.

INSTALAR NODEMON CON EL SIGUIENTE COMANDO
    
    npm install -g nodemon

    Nodemon es un comando que permite que el servidor de desarrollo no se detenga cuando se editan los archivos. Esto se confugura en la sección scripts de package.json  de la siguiente forma:
    "start": "nodemon index.js",

EDITAR  \assets\constants.js CON LOS DATOS DE LA CUENTA DE MONGOOSE

        =========================================================================================================================================
        /* Reemplazar con los datos configurados en la nube de mongoose */
        const mongoUser = "<usr>"; 
        const mongoPassword = "<psw>";
        const mongoDataBase = "<db>";

        exports.mongo = {
            url:`mongodb+srv://${mongoUser}:${mongoPassword}@cluster0-066qu.gcp.mongodb.net/${mongoDataBase}?retryWrites=true&w=majority`
        } 
        /*
        La url para poder conectar la api a mongoose se obtiene en: Clusters -> Connect -> Conect your application
        */
        =========================================================================================================================================
    
INSTALAR DEPENDENCIAS CON EL SIGUIENTE COMANDO
    npm install

PARA INICIAR EL SERVIDOR DE DESARROLLO
    npm star
=======
# catalogo-productos-api
>>>>>>> 1da3d78427fb8eab5dcc5d60ca3fd8b323276491
