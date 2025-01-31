const {findAllActivities} = require('../service/activity.js');

// GET todos los usuarios
const getActivities = async (req, res) => {
    try {
      const data = await findAllActivities();
      
      if (data.length === 0) {
        return res.status(404).json({ message: 'No se encontraron clases.' });
      }
      
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al obtener los usuarios.' });
    }
  };
  

module.exports = {
   getActivities
}