import express from 'express';
const router = express.Router();

//importando el modelo vehiculo
import Vehiculo from '../models/vehiculos';

router.post('/nuevo-vehiculo', async(req, res)=>{
  const body = req.body;
  try {
    const notaDB = await Vehiculo.create(body);
    const vehiculo= await Vehiculo.findById(
      notaDB.id
    )
    res.status(200).json(vehiculo);
  }catch(error){
    return res.status(500).json({
      mensaje: `${error}`,
      error
    })
  }
});

router.get('/nuevo- /:id', async(req, res)=>{
  //consiguiendo los datos de la base
});

module.exports = router;