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

const { getCargues, getOneCargue, addCargue, editCargue, deleteCargue } = require('../controllers/cargue.controller')
apptset.get('/cargue/', getCargues);
apptset.get('/cargue/:idcargue', getOneCargue);
apptset.post('/cargue/', addCargue);
apptset.put('/cargue/:idcooperativa', editCargue);
apptset.put('/cargue/delete/:idcargue', deleteCargue);

module.exports = apptset