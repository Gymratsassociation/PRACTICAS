const db = require('../configuration/datebase.js').db;

//BUSQUEDA EN BBDD DE USUARIOS (TODOS)
const findAllUsers=(async () => {
    const result = await db('user').Select('*');
    return result;

});

const findUser = (async (username)=> {
    const result = await  db('user').Select('*').where({name: username}).First();
    return result;
});

module.exports = {
    findAllUsers,
    findUser
}