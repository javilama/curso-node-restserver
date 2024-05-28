const { response } = require('express');




const getUsuarios = (req = request, res = response) => {

    const {q,nombre = 'no name',apiKey, page = '1', limit = 5} = req.query;

    res.json({
      msg: "get API - controller",
      q,
      nombre,
      apiKey,
      page,
      limit
    });
  }

const postUsuarios = (req, res = response) => {

    const {nombre, edad} = req.body;

    res.status(201).json({
      msg: "post API - controller",
      nombre,
      edad
    });
  }

const putUsuarios =  (req, res) => {

    const {id} = req.params;

    res.status(400).json({
      msg: "put API - controller",
      id
    });
  }

const patchUsuarios =  (req, res) => {
    res.status(400).json({
      msg: "patch API - controller",
    });
  }

const deleteUsuarios = (req, res) => {
    res.json({
      msg: "delete API - controller",
    });
  }


  module.exports = {

    getUsuarios,
    postUsuarios,
    putUsuarios,
    patchUsuarios,
    deleteUsuarios
  }