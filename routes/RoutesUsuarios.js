const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const usuarioController = require("../controllers/usuariosController");

router.post(
  "/",
  [
    check("nombre", "El nombre es requerido").not().isEmpty(),
    check("email", "Ingrese un correo eléctronico valido").isEmail(),
    check(
      "password",
      "La contraseña debe contener minimo 8 caracteres"
    ).isLength({ min: 8 }),
  ],
  usuarioController.crearUsuario
);

module.exports = router;
