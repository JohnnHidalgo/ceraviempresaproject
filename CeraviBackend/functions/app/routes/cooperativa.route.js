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

const { getCooperativas, getOneCooperativa, addCooperativa, editCooperativa, deleteCooperativa } = require('../controllers/cooperativa.controller')
apptset.get('/cooperativa/', getCooperativas);
apptset.get('/cooperativa/:idcooperativa', getOneCooperativa);
apptset.post('/cooperativa/', addCooperativa);
apptset.put('/cooperativa/:idcooperativa', editCooperativa);
apptset.put('/cooperativa/delete/:idcooperativa', deleteCooperativa);

module.exports = apptset