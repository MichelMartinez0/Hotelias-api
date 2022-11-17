const express= require('express');
const  conexionDB=require('./db');
const app= express();
require('dotenv').config();

//Conexion a la base de datos 
conexionDB();
//configuraciones
app.set("name","api-hotelia");
app.set("port",process.env.PORT||3000);
app.set("host",process.env.HOST||'localhost');
//puerto


