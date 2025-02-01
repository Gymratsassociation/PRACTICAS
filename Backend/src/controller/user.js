const {findAllUsers, findUser,registerUser, updateUserUsername, deleteUserById } = require('../service/user.js');


// GET todos los usuarios
const getUsers = async (req, res) => {
    try {
      const data = await findAllUsers();
      
      if (data.length === 0) {
        return res.status(404).json({ message: 'No se encontraron usuarios.' });
      }
      
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al obtener los usuarios.' });
    }
  };
  
  // Controlador GET ONE
const getUser = async (req, res) => {
  try {
    // Obtener username y password desde los parámetros de la URL
    const { username, password } = req.params;

    const data = await findUser(username, password);
    
    if (!data) {
      return res.status(404).json({ message: 'Usuario no encontrado.' });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener el usuario.' });
  }
};

//POST
const postUser = async (req, res) => {
  try {
    const { nombre, email, contraseña, telefono } = req.body;
    if (!nombre || !email || !contraseña || !telefono) {
      return res.status(400).json({ message: 'Todos los campos son requeridos' });
    }

    const data = await registerUser(nombre, email, contraseña, telefono);

    res.status(201).json(data); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear el usuario' });
  }
};

// POST Login 
const loginUser = async (req, res) => {
  try {
      console.log('Datos recibidos en login:', req.body);

      const { username, password } = req.body;

      if (!username || !password) {
          return res.status(400).json({ message: 'Usuario y contraseña son requeridos.' });
      }

      const user = await findUser(username, password);

      if (!user) {
          return res.status(401).json({ message: 'Usuario o contraseña incorrectos.' });
      }

      res.status(200).json({
          id: user.id_usuario,
          username: user.nombre,
          email: user.email,
          phone: user.telefono,
      });
  } catch (error) {
      console.error('Error en login:', error);
      res.status(500).json({ message: 'Error interno del servidor.' });
  }
};

//PUT
const putUser = async (req, res) => {
    try {
      const { id, nombre, email, contraseña, telefono } = req.body; 
      //const { nuevoNombreUsuario } = req.body; 
      
      const data = await updateUserUsername(id, nombre);
      
      if (!data) {
        return res.status(404).json({ message: 'Usuario no encontrado.' });
      }
  
      res.status(200).json({ message: 'Nombre de usuario actualizado con éxito.', data });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al actualizar el usuario.' });
    }
  };
// DELETE para eliminar un usuario por ID
const deleteUser = async (req, res) => {
    try {
      const { id } = req.params;  // El ID del usuario que viene en la URL
  
      const result = await deleteUserById(id);
      
      if (!result) {
        return res.status(404).json({ message: 'Usuario no encontrado.' });
      }
  
      res.status(200).json(result); // Devuelves el mensaje de éxito
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al eliminar el usuario.' });
    }
  };

module.exports = {
    loginUser,  
    getUser,
    getUsers,
    postUser,
    putUser,
    deleteUser
}