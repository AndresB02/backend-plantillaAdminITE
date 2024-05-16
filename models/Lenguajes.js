const mongoose = require("mongoose");

// modelo debe ser igual a lo que tenga la base de datos
const lenguajesSchema = mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    tipo: {
      type: String,
      required: true,
    },
    duracion: {
      type: String,
      required: true,
    },
    entidad: {
      type: String,
      required: true,
    },
    valor: {
      type: Number,
      required: true,
    },
    estado: {
      type: String,
      required: true,
    },
  },
  { versionkey: false }
);

module.exports = mongoose.model("Lenguajes", lenguajesSchema);
