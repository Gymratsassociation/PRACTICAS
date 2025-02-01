const {findReservationsByUserId,registerReservation} = require('../service/reservation.js');

//GET
const getReservationsByUserId = async (req, res) => {
    try {
      const { idUsuario } = req.params;  // Obtienes el 'idUsuario' de los parámetros de la ruta
      const reservations = await findReservationsByUserId(idUsuario); // Suponiendo que tienes una función que busca las reservas
      
      if (!reservations || reservations.length === 0) {
        return res.status(404).json({ message: 'No se encontraron reservas para este usuario.' });
      }

      res.status(200).json(reservations);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al obtener las reservas.' });
    }
  };
  
//POST

  const postReservation = async (req, res) => {
    try {
      const { idUsuario, idClase } = req.body;

      if (!idUsuario || !idClase) {
        return res.status(400).json({ message: 'Faltan datos: idUsuario o idClase son requeridos' });
      }
      const data = await registerReservation(idUsuario, idClase);
      
      res.status(201).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al registrar la reserva de clase' });
    }
  };
  //TODO DELETE

  module.exports = {
    getReservationsByUserId,
    postReservation
  };
