const db = require('../configuration/database');

// Buscar reservas por el ID de usuario
const findUserReservation = (idUsuario) => {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM Reservas WHERE ID_Usuario = ?', [idUsuario], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows); // Devuelve todas las reservas del usuario
      }
    });
  });
};

// Registrar una nueva reserva
const registerReservation = (idUsuario, idClase) => {
    return new Promise((resolve, reject) => {
      const stmt = db.prepare('INSERT INTO Reservas (ID_Usuario, ID_Clase) VALUES (?, ?)');
      stmt.run(idUsuario, idClase, function(err) {
        if (err) {
          reject(err);  // Si hay un error, lo rechazamos
        } else {
          resolve({ id: this.lastID, idUsuario, idClase }); 
        }
      });
    });
  };

module.exports = {
  findUserReservation,
  registerReservation
};