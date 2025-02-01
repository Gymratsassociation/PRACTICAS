const db = require('../configuration/database'); 

// Obtener todos los usuarios
const findAllUsers = () => {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM Usuarios', [], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};

// Buscar un usuario por nombre de usuario y contraseña
const findUser = (username, password) => {
  return new Promise((resolve, reject) => {
    db.get('SELECT * FROM Usuarios WHERE nombre = ? AND contraseña = ?', [username, password], (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
};

module.exports = {
  findUser
};
// Registrar un nuevo usuario
const registerUser = (nombre, email, contraseña, telefono) => {
    return new Promise((resolve, reject) => {
      const stmt = db.prepare('INSERT INTO Usuarios (nombre, email, contraseña, telefono) VALUES (?, ?, ?, ?)');
      stmt.run(nombre, email, contraseña, telefono, function(err) {
        if (err) {
          reject(err);
        } else {
          resolve({ id: this.lastID, username: nombre, email, phone: telefono });
        }
      });
    });
  };
// Actualizar el nombre de usuario
const updateUserUsername = (id, nuevoNombreUsuario) => {
  return new Promise((resolve, reject) => {
    const stmt = db.prepare('UPDATE Usuarios SET nombre = ? WHERE id = ?');
    stmt.run(nuevoNombreUsuario, id, function(err) {
      if (err) {
        reject(err);
      } else {
        if (this.changes === 0) {
          resolve(null);  
        } else {
          resolve({ username: nuevoNombreUsuario });
        }
      }
    });
  });
};
// Eliminar un usuario por ID
const deleteUserById = (id) => {
    return new Promise((resolve, reject) => {
      // Utilizamos el id del usuario para eliminarlo
      const stmt = db.prepare('DELETE FROM Usuarios WHERE ID_Usuarios = ?');
      stmt.run(id, function(err) {
        if (err) {
          reject(err);
        } else {
          if (this.changes === 0) {
            // Si no se encontró ningún usuario con ese id
            resolve(null);  
          } else {
            // Si se eliminó un usuario con éxito
            resolve({ message: 'Usuario eliminado con éxito' });
          }
        }
      });
    });
  };
module.exports = {
  findAllUsers,
  findUser,
  registerUser,
  updateUserUsername,
  deleteUserById
};