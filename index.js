const express = require('express');
const app = express();
const archivobd = require('./conexion');

const rutaPlatos = require('./rutas/platos');

const port = process.env.PORT || 4000;

app.use(cors({
    origin: '*'
}));

app.use('/api/platos', rutaPlatos);

app.get('/api/', (req, res) => {
    res.end("holis");
})

app.listen(port, function(){
    console.log("hola");
})