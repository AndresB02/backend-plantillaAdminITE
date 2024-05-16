const Usuario = require("../models/Usuario");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

exports.crearUsuario = async (req, res) => {
  /* revisar si hay errores */
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400), json({ errores: errores.array() });
  }
  /* ------------------------------- */
  const { email, password } = req.body;
  try {
    /* verificar si el usuario esta registrado  y sea unico*/
    let usuario = await Usuario.findOne({ email });
    if (usuario) {
      return res.status(400), json({ msg: "El usuario ya existe" });
    }
    /* crear nuevo usuario */
    usuario = new Usuario(req.body);
    usuario.password = await bcryptjs.hash(password, 8);

    /* guardar un usuario */
    await usuario.save();

    /* al revisar todo y verificar que este correcto, se firma el token */
    const payload = {
      usuario: { id: usuario.id },
    };
    jwt.sign(
      payload,
      process.env.SECRETA,
      { expiresIn: 3600 },
      (error, token) => {
        if (error) throw error;
        /* mensaje de confirmacion */
        res.json({ token });
      }
    );
  } catch (error) {
    console.log("Se ha encontrado un error");
    console.log(error);
    res.status(400).send("Se ha encontrado un error");
  }
};
