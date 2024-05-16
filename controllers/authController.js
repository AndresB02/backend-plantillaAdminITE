const Usuario = require("../models/Usuario");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

exports.autenticarUsuario = async (req, res) => {
  /* revisar si hay errores */
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }
  /* ------------------------------- */
  const { email, password } = req.body;
  try {
    /* verificar si el usuario esta registrado */
    let usuario = await Usuario.findOne({ email });
    if (!usuario) {
      return res.status(400).json({ msg: "El usuario no esta registrado" });
    }
    /* revisamos la contraseña */
    const contraseñaCorrecta = await bcryptjs.compare(
      password,
      usuario.password
    );
    if (!contraseñaCorrecta) {
      return res.status(400).json({ msg: "La contraseña no es valida" });
    }
    /* al revisar todo y verificar que este correcto, se firma el token */
    const payload = {
      usuario: { id: usuario.id },
    };
    jwt.sign(
      payload,
      process.env.SECRETA,
      { expiresIn: 43200 },
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

exports.usuarioAutenticado = async (req, res) => {
  try {
    const usuarioCreado = await Usuario.findById(req.usuario.id);
    res.json({ usuarioCreado });
  } catch (error) {
    res.status(400).json({ msg: "Se he encontradon un error" });
  }
};
