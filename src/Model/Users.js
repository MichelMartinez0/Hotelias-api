const {Schema ,model}= require ("mongoose");

const usuariosSchema = new Schema({
    _id:Number,
    tipodoc:String,
    nombre: String,
    apellido: String,
    fnacimiento:Date,
    genero:String,
    email:{ String ,required:true ,unique:true},
    telefono:Number,
    paisorigen:String,
    password:String,
    tipouser:String,
    img: String,
    reservas:[{
        type:Schema.Types.Number,
        ref:'Reservas'
    }]
})

module.exports = model("Users",usuariosSchema);
