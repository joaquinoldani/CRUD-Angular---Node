const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

const { PromiseProvider } = require('mongoose');

//Creo el servidor
const app = express();

//Conecto a la base de datos
conectarDB();
app.use(cors())

app.use(express.json());

app.use('/api/productos', require('./routes/producto'));

//Defino ruta principal
/*app.get('/', (req, res) => {
    res.send('Hola mundo!');
})*/

app.listen(4000, ()=> {
    console.log('El servidor esta corriendo perfectamente')
})