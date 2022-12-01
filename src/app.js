const express= require('express');
const  conexionDB=require('./db');
const rutasHab = require('./Routes/habitacion.routes');
const rutasUser = require('./Routes/user.routes');
const rutasRes = require('./Routes/reserva.routes');

const app = express();
require('dotenv').config();

//Conexion a la base de datos 
conexionDB();
//configuraciones
app.set("name","api-hotelia");
app.set("port",process.env.PORT||3200);
app.set("host",process.env.HOST||'localhost');
//middleware
app.use(express.json());

//Llamado de rutas 

app.use(express.static('public'));
app.use('/public',express.static('public/upload'));

app.use('/habitaciones',rutasHab);
app.use('/users',rutasUser);
app.use('/reservas',rutasRes);

//puerto
module.exports=app;

