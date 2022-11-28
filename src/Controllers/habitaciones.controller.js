const Habitacion = require ('../Model/Habitacion');

exports.obtener = async (req,res) =>{
    try {
        const habitaciones = await Habitacion.find();
        res.status(200).json(habitaciones)
    } catch (error) {
        res.status(500).json(error)
    }
}