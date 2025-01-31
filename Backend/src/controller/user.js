const {findAllUsers, findUser} = require('../service/user.js');


//GET
const getUsers = (async(req, res)=> {
    const data = await findAllUsers();
    
    res.status(200).json(data);
})

const getUser = (async(req, res)=> {
    const data = await findUser(req.params.user);
    
    res.status(200).json(data);
})

//POST


//PUT

//DELETE
module.exports = {
    getUser,
    getUsers
}