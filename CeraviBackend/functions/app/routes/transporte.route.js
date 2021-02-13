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

const { getTransporte, getOneTransporte, addTransporte, editTransporte, deleteTransporte } = require('../controllers/transporte.controller')
apptset.get('/transporte/', getTransporte);
apptset.get('/transporte/:idtransporte', getOneTransporte);
apptset.post('/transporte/', addTransporte);
apptset.put('/transporte/:idtransporte', editTransporte);
apptset.put('/transporte/delete/:idtransporte', deleteTransporte);

module.exports = apptset