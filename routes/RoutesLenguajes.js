const express = require("express");

/* instanciar la libreria express */
const router = express.Router();

/* crear las rutas llamando al controller, ya que alli se estan haciendo 1 a 1 las funciones a instanciar */
const LenguajesController = require("../controllers/lenguajesController");

/* post sirve para agregar */
/*  rutas del crud -> post sirve para crear el elemento en la base de datos*/
router.post("/", LenguajesController.agregarLenguajes);
/* get sirve para mostrar los elementos creados de la base de datos */
router.get("/", LenguajesController.mostrarLenguajes);
/* como estamos buscando por id, a la ruta se le agrega id */
router.get("/:id", LenguajesController.mostrarUnLenguaje);
/* delete -> es la forma de eliminar un elemento de la  base de datos */
router.delete("/:id", LenguajesController.eliminarLenguajes);
/* patch -> sirve para actualizar/modificar elementos de la base de datos */
router.patch("/:id", LenguajesController.modificarLenguajes);
/* put -> sirve para actualizar/modificar elementos de la base de datos */
router.put("/:id", LenguajesController.actualizarLenguajes);

module.exports = router;
