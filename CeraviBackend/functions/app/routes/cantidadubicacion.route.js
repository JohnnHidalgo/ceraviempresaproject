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

const { getCantidadubicacions, getOneCantidadubicacion, addCantidadubicacion, editCantidadubicacion, deleteCantidadubicacion } = require('../controllers/cantidadubicacion.controller')
apptset.get('/cantidadubicacion/', getCantidadubicacions);
apptset.get('/cantidadubicacion/:idcantidadubicacion', getOneCantidadubicacion);
apptset.post('/cantidadubicacion/', addCantidadubicacion);
apptset.put('/cantidadubicacion/:idcooperativa', editCantidadubicacion);
apptset.put('/cantidadubicacion/delete/:idcantidadubicacion', deleteCantidadubicacion);

module.exports = apptset