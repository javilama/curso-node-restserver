const { response } = require('express');
const bcryptjs = require('bcryptjs');

const User = require('../models/user');

//GET
const getUsuarios = async (req = request, res = response) => {
    const {limit = 5, from = 0} = req.query;
    const query = {state:true}

    // const users = await User.find(query)
    // .limit(limit)
    // .skip(from);
    
    // const total = await User.countDocuments(query);

    const [total, users] = await Promise.all([
      User.countDocuments(query),
      User.find(query)
        .limit(limit)
        .skip(from)
    ])




    res.json({
     total,
     users
    });
  }

//POST
const postUsuarios = async (req, res = response) => {

    

    const {name, email, password, role} = req.body;
    //creacion de la instancia del modelo (Schema)
    const user = new User( {name, email, password, role} ); 

    //encriptar la contraseña.
     const salt = bcryptjs.genSaltSync();
     user.password = bcryptjs.hashSync(password, salt);

    // guardar en DB
    
    await user.save();
  
    res.status(201).json({
      user
    });
  }
//PUT
const putUsuarios = async (req, res = response) => {

    const {id} = req.params;
    const {_id,password, google, ...rest} = req.body;
    if (password) {
      //encriptar la contraseña.
     const salt = bcryptjs.genSaltSync();
     rest.password = bcryptjs.hashSync(password, salt);
    }
    const user = await User.findByIdAndUpdate(id, rest);

    res.status(400).json({
      user
    });
  }
//PATCH
const patchUsuarios =  (req, res) => {
    res.status(400).json({
      msg: "patch API - controller",
    });
  }
//DELETE
const deleteUsuarios = async (req, res = response) => {

   const {id} = req.params;
   //borrado fisicamente de la BD
   //const user = await User.findByIdAndDelete(id);

   const user = await User.findByIdAndUpdate(id,{state: false});

    res.json({
      user
    });
  }


  module.exports = {

    getUsuarios,
    postUsuarios,
    putUsuarios,
    patchUsuarios,
    deleteUsuarios
  }