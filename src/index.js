/* inicializar express */
const express = require("express");

/* llamar la conexcion de mongo db */
const conectarBD = require("../config/config");

/* llamar cosr */
const cors = require("cors");

/* iniciar servidor */
const app = express();
const port = 5000;

conectarBD();
app.use(cors());
app.use(express.json({ extended: true }));

//rutas de los modulos
app.use("/programacion/lenguajes", require("../routes/RoutesLenguajes"));
app.use("/programacion/clientes", require("../routes/RoutesClientes"));
app.use("/programacion/usuarios", require("../routes/RoutesUsuarios"));
app.use("/programacion/auth", require("../routes/RoutesAuth"));

/* enlazar la conexion de la base de datos */

app.listen(port, () =>
  console.log("El servidor esta conectado en el puerto: http://localhost:5000")
);

app.get("/", (req, res) => {
  res.send("Bienvenido, nuestro servidor esta configurado");
});
