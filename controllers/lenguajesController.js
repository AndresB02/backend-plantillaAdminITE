/* exportar el modelo */
const Lenguajes = require("../models/Lenguajes");

/* metodo/funcion para agregar los lenguajes de programacion */
exports.agregarLenguajes = async (req, res) => {
  try {
    /* agregar clientes */
    let lenguajes = new Lenguajes(req.body);
    /* save() metodo para agregar */
    await lenguajes.save();
    res.send({ lenguajes });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send("Hubo un error al agregar el lenguaje de programación");
  }
};

/* metodo/funcion para mostrar lenguajes de programacion */
exports.mostrarLenguajes = async (req, res) => {
  try {
    /* find() sirve para mostrar/recuperar datos de la base de datos */
    let lenguajes = await Lenguajes.find();
    res.json({ lenguajes });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send("Hubo un error al mostrar el lenguaje de programación");
  }
};

/* metodo/funcion para mostrar un lenguaje de programacion  */
exports.mostrarUnLenguaje = async (req, res) => {
  try {
    /* findById() sirve para mostrar/recuperar datos de la base de datos */
    let lenguajes = await Lenguajes.findById(req.params.id);
    if (!lenguajes) {
      res.status(404).json({
        msg: "No se encuentra el lenguaje de programación con ese ID",
      });
    }
    res.send({ lenguajes });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al buscar el lenguaje de programación");
  }
};

/* metodo/funcion para eliminar un lenguaje de programación*/
exports.eliminarLenguajes = async (req, res) => {
  try {
    /* findById() sirve para mostrar/recuperar datos de la base de datos */
    let lenguajes = await Lenguajes.findById(req.params.id);

    if (!lenguajes) {
      res.status(404).json({ msg: "El cliente no existe" });
      return;
    }
    /* si el sliente esta se hace lo siguiente -> findOneAndDelete() sirve para eliminar elementos de la base de datos */
    await Lenguajes.findOneAndDelete({ _id: req.params.id });
    res.json({ msg: "El lenguaje de programación fue eliminado" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send(
        "Hubo un error al eliminar el lenguaje de programación de la base de datos"
      );
  }
};

/* metodo/funcion para modificar lenguajes de programación */
exports.modificarLenguajes = async (req, res) => {
  try {
    /* findByIdAndUpdate() sirve para actualizar datos de un elemento de la base de datos */
    let lenguajes = await Lenguajes.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!lenguajes) {
      return res.status(404).json({ msg: "El cliente no existe" });
    }
    /* si el sliente esta se hace lo siguiente */
    res.json(lenguajes);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send(
        "Hubo un error al modificar el lenguaje de programación de la base de datos"
      );
  }
};

/* metodo/funcion para actualizar datos de un lenguaje de programacion */
exports.actualizarLenguajes = async (req, res) => {
  try {
    /* findByIdAndUpdate() sirve para actualizar datos de un elemento de la base de datos */
    let lenguajes = await Lenguajes.findByIdAndUpdate(
      { _id: req.params.id },
      req.body
    );

    if (!lenguajes) {
      return res.status(404).json({ msg: "El cliente no existe" });
    }
    /* si el sliente esta se hace lo siguiente */
    res.json(lenguajes);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send(
        "Hubo un error al actualizar un lenguaje de programación de la base de datos"
      );
  }
};
