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

const { getUbicacions, getOneUbicacion, addUbicacion, editUbicacion, deleteUbicacion } = require('../controllers/ubicacion.controller')
apptset.get('/ubicacion/', getUbicacions);
apptset.get('/ubicacion/:idubicacion', getOneUbicacion);
apptset.post('/ubicacion/', addUbicacion);
apptset.put('/ubicacion/:idubicacion', editUbicacion);
apptset.put('/ubicacion/delete/:idubicacion', deleteUbicacion);

module.exports = apptset