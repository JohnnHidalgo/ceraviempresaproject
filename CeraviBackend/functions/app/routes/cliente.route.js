'use strict'

const test = require('express');
var apptset = test();
var cors = require('cors')

apptset.use(cors({ origin: '*' }));
apptset.use(cors());

apptset.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const { getClientes, getOneCliente, addCliente, editCliente, deleteCliente } = require('../controllers/cliente.controller')
apptset.get('/cliente/', getClientes);
apptset.get('/cliente/:idcliente', getOneCliente);
apptset.post('/cliente/', addCliente);
apptset.put('/cliente/:idcliente', editCliente);
apptset.put('/cliente/delete/:idcliente', deleteCliente);

module.exports = apptset