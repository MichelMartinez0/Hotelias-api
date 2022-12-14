const {Schema ,model}= require ("mongoose");
const reservaSchema = new Schema({
    fentrada:Date,
    fsalida:Date,
    cantidadnoches :Number,
    freserva: Date,
    totalreserva:Number,
    user:[{
        type:Schema.Types.Number,
        ref: 'User'
    }],
    habitaciones:[{
        type:Schema.Types.Number,
        ref:'Habitacion'
    }]
})

module.exports = model ("Reservas",reservaSchema);