const db = require('../configuration/database'); 

// Obtener todos los usuarios
const findAllActivities = () => {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM Clases', [], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};
module.exports = {
    findAllActivities
  };