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

const { getTrabajadors, getOneTrabajador, addTrabajador, editTrabajador, deleteTrabajador } = require('../controllers/trabajador.controller')
apptset.get('/trabajador/', getTrabajadors);
apptset.get('/trabajador/:idtrabajador', getOneTrabajador);
apptset.post('/trabajador/', addTrabajador);
apptset.put('/trabajador/:idtrabajador', editTrabajador);
apptset.put('/trabajador/delete/:idtrabajador', deleteTrabajador);

module.exports = apptset