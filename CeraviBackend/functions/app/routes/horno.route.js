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

const { getHornos, getOneHorno, addHorno, editHorno, deleteHorno } = require('../controllers/horno.controller')
apptset.get('/horno/', getHornos);
apptset.get('/horno/:idhorno', getOneHorno);
apptset.post('/horno/', addHorno);
apptset.put('/horno/:idhorno', editHorno);
apptset.put('/horno/delete/:idhorno', deleteHorno);

module.exports = apptset