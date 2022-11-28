const {Router}=require("express");
const rutasHabitacion = Router();
const ctrHab = require ("../Controllers/habitaciones.controller");
rutasHabitacion.get('/',ctrHab.obtener);
/*rutasHabitacion.get('/:id',ctrHab.obtenerId);
rutasHabitacion.post('/',ctrHab.add);
rutasHabitacion.put('/:id',ctrHab.edit);*/

module.exports = rutasHabitacion;