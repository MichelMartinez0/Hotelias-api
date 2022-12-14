const Habitacion = require ('../Model/Habitacion');

exports.obtener = async (req,res) =>{
    try {
        const habitaciones = await Habitacion.find();
        res.status(200).json(habitaciones)
    } catch (error) {
        res.status(500).json(error)
    }
}
    exports.obtenerId = async (req, res) => {
        try {
            const id=req.params.id;
            const habitaciones = await Habitacion.findById(id).populate('_id', {
                "_id":1,
                "fentrada":1,
                "cantidadnoches":1,
                "freserva": 1,
                "totalreserva":1            
            })
        } catch (error) {
            res.status(500).json(error)
        }
}
exports.add = async (req, res) => {
    try {
      //const { nombrehab, numerohab, capacidad, camas, descripcion, wifi, tv, banio, cajafuerte, nevera, valornoche, img, estado } = req.body;
      const newHabitacion = new Habitacion(req.body,req.file)
      console.log(req.file);
      if(req.file){
        const {filename}=req.file;
        newHabitacion.setImg(filename);
        console.log("si hay imagen")
      }else{
        console.log("No hay imagen")
      }
      await newHabitacion.save();
      console.log(newHabitacion);
      res.json({ msj: "Habitación registrada exitosamente", id: newHabitacion._id })
    } catch (error) {
      res.status(500).json({msj:"Error al registrar"+error})
    }
  
  }

exports.edit = async(req,res)=>{
    try {
        const id = req.params.id;
        const newHabitacion = new Habitacion(req.body,req.file)
        console.log(req.file);
        if(req.file){
            const {filename} = req.file;
            newHabitacion.setImg(filename);
            console.log("si hay imagen")
        }else{
            console.log("no hay imagen")
        }
        const cambioHabitacion = await Habitacion.findByIdAndUpdate(id,newHabitacion);
        res.json({ msj: "Habitación actualizada exitosamente"})
    } catch (error) {
        res.status(500).json(error);
    }
}