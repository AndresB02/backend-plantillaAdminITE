const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  /* se leera el token del header */
  const token = req.header("x-auth-token");
  /* revisar si se posee un token */
  if (!token) {
    return res
      .status(400)
      .json({ msg: "Permiso degeneado, no posee un token valido" });
  }
  /* validar si hay token */
  try {
    const cifrado = jwt.verify(token.process.env.SECRETA);
    req.usuario = cifrado.usuario;
    next();
  } catch (error) {
    res.status(400).json("Token no valido");
  }
};
