const userCtrl = {} ;

const User = require('../models/User');

userCtrl.getUsers = async (req, res)=>{

    const users = await User.find();
    res.json(users);

}
userCtrl.createUser = (req, res)=>{
    
    res.send('Users Routes')
}

userCtrl.deleteUser = (req, res)=>res.send('Users Routes')


module.exports = userCtrl;