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

const { getMoldeados, getOneMoldeado, addMoldeado, editMoldeado, deleteMoldeado } = require('../controllers/moldeado.controller')
apptset.get('/moldeado/', getMoldeados);
apptset.get('/moldeado/:idmoldeado', getOneMoldeado);
apptset.post('/moldeado/', addMoldeado);
apptset.put('/moldeado/:idmoldeado', editMoldeado);
apptset.put('/moldeado/delete/:idmoldeado', deleteMoldeado);

module.exports = apptset