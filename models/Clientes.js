const mongoose = require("mongoose");

// Este modelo debe ser igual a lo que tenga la DB
// Se define un esquema (clientSchema) utilizando mongoose.Schema().
const clientesSchema = mongoose.Schema(
  {
    nombre: {
      type: String,
      require: true,
    },
    apellido: {
      type: String,
      require: true,
    },
    documento: {
      type: Number,
      require: true,
    },
    correo: {
      type: String,
      require: true,
    },
    telefono: {
      type: Number,
      require: true,
    },
    direccion: {
      type: String,
      require: true,
    },
  },
  {
    versionkey: false,
  }
);

module.exports = mongoose.model("Cliente", clientesSchema);
