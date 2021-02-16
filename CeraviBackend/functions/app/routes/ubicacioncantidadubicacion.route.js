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

const { getUbicacioncantidadubicacions, getOneUbicacioncantidadubicacion, addUbicacioncantidadubicacion, editUbicacioncantidadubicacion, deleteUbicacioncantidadubicacion } = require('../controllers/ubicacioncantidadubicacion.controller')
apptset.get('/ubicacioncantidadubicacion/', getUbicacioncantidadubicacions);
apptset.get('/ubicacioncantidadubicacion/:idubicacioncantidadubicacion', getOneUbicacioncantidadubicacion);
apptset.post('/ubicacioncantidadubicacion/', addUbicacioncantidadubicacion);
apptset.put('/ubicacioncantidadubicacion/:idcooperativa', editUbicacioncantidadubicacion);
apptset.put('/ubicacioncantidadubicacion/delete/:idubicacioncantidadubicacion', deleteUbicacioncantidadubicacion);

module.exports = apptset