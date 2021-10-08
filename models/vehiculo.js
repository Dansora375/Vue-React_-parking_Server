import mongoose from 'mongoose'

const Schema = mongoose.Schema

const vehiculoSche = new mongoose.Schema({

  placa: {
    type: String,
    required: [true, 'Placa es obligatoria']
  },
  marca: String,
  color: String,
  tipo: {
    type: String,
    enum: ['Carro', 'Moto', 'Ninguno'],
    default: ['Carro', 'Moto', 'Ninguno'].lastItem
  },
  datos_extra: String,
  // Al crear eL vehiculo se le necesitara ingresar el nombre del parqueadero, apra poderlo relacionar
  parqueadero: {
    type: Schema.Types.ObjectId,
    ref: 'parqueadero'
  },
  // Se debera ingresar el CC del dueño del auto
  ResidentOwner: {
    type: Schema.Types.ObjectId,
    ref: 'Residente'
  }

})

const vehiculo = mongoose.model('vehiculo', vehiculoSche)
export default vehiculo
