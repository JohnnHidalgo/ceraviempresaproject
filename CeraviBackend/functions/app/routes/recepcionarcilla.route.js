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

const { getRecepcionarcillas, getOneRecepcionarcilla, addRecepcionarcilla, editRecepcionarcilla, deleteRecepcionarcilla } = require('../controllers/recepcionarcilla.controller')
apptset.get('/recepcionarcilla/', getRecepcionarcillas);
apptset.get('/recepcionarcilla/:idrecepcionarcilla', getOneRecepcionarcilla);
apptset.post('/recepcionarcilla/', addRecepcionarcilla);
apptset.put('/recepcionarcilla/:idrecepcionarcilla', editRecepcionarcilla);
apptset.put('/recepcionarcilla/delete/:idrecepcionarcilla', deleteRecepcionarcilla);

module.exports = apptset