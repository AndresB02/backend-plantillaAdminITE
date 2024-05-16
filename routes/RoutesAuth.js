const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const authController = require("../controllers/authController");
const auth = require("../middleware/authMiddleWare");

/* autenticar usuario || ruta api/auth*/

router.post(
  "/",
  [
    check("email", "Ingrese un email valido").isEmail(),
    check(
      "password",
      "La contraseña debe contener minimo 8 caracteres"
    ).isLength({ min: 8 }),
  ],
  authController.autenticarUsuario
);

router.get("/", auth, authController.usuarioAutenticado);

module.exports = router;
