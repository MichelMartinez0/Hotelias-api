const {Schema,model}= require ("mongoose");

const habitacionSchema = new Schema({
    _id:Number,
    nombreHab:String,
    capacidad: Number,
    descripcion:String,
    wifi:String,
    tv:String,
    banio:String,
    cajafuerte:String,
    nevera:String,
    valornoche:String,
    img:String,
    estado:String,
    reservas:[{
        type: Schema.Types.ObjectId,
        ref:'Reservas'
    }]
})
habitacionSchema.methods.setImg = function set(filename){
    this.img = `/public/${filename}`;
}
module.exports = model("Habitacion",habitacionSchema);