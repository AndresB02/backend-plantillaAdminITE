const Clientes = require("../models/Clientes");

/* metodo/funcion para agregar los lenguajes de programacion */
exports.agregarClientes = async (req, res) => {
  try {
    /* agregar clientes */
    let clientes = new Clientes(req.body);
    /* save() metodo para agregar */
    await clientes.save();
    res.send(clientes);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al agregar un cliente");
  }
};

/* metodo/funcion para mostrar lenguajes de programacion */
exports.mostrarClientes = async (req, res) => {
  try {
    /* find() sirve para mostrar/recuperar datos de la base de datos */
    let clientes = await Clientes.find();
    res.json({ clientes });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al mostrar el cliente");
  }
};

/* metodo/funcion para mostrar un lenguaje de programacion  */
exports.mostrarUnCliente = async (req, res) => {
  try {
    /* findById() sirve para mostrar/recuperar datos de la base de datos */
    let clientes = await Clientes.findById(req.params.id);
    if (!clientes) {
      res.status(404).json({
        msg: "No se encuentra el cliente con ese ID",
      });
    } else {
      res.send(clientes);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al buscar el cliente");
  }
};

/* metodo/funcion para eliminar un lenguaje de programación*/
exports.eliminarClientes = async (req, res) => {
  try {
    /* findById() sirve para mostrar/recuperar datos de la base de datos */
    let clientes = await Clientes.findById(req.params.id);

    if (!clientes) {
      res.status(404).json({ msg: "El cliente no existe" });
      return;
    }
    /* si el sliente esta se hace lo siguiente -> findOneAndDelete() sirve para eliminar elementos de la base de datos */
    await Clientes.findOneAndDelete({ _id: req.params.id });
    res.json({ msg: "El cliente fue eliminado" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send("Hubo un error al eliminar el cliente de la base de datos");
  }
};

/* metodo/funcion para modificar lenguajes de programación */
// exports.modificarClientes = async (req, res) => {
//   try {
//     /* findByIdAndUpdate() sirve para actualizar datos de un elemento de la base de datos */
//     let clientes = await Clientes.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     });

//     if (!clientes) {
//       return res.status(404).json({ msg: "El cliente no existe" });
//     }
//     /* si el sliente esta se hace lo siguiente */
//     res.json(clientes);
//   } catch (error) {
//     console.log(error);
//     res
//       .status(500)
//       .send("Hubo un error al modificar el cliente en la base de datos");
//   }
// };

/* metodo/funcion para actualizar datos de un lenguaje de programacion */
exports.actualizarClientes = async (req, res) => {
  try {
    /* findByIdAndUpdate() sirve para actualizar datos de un elemento de la base de datos */
    let clientes = await Clientes.findByIdAndUpdate(
      { _id: req.params.id },
      req.body
    );

    if (!clientes) {
      return res.status(404).json({ msg: "El cliente no existe" });
    }
    /* si el sliente esta se hace lo siguiente */
    res.json(clientes);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send("Hubo un error al actualizar el cliente en de la base de datos");
  }
};
