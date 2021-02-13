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

const { getTipotransportes, getOneTipotransporte, addTipotransporte, editTipotransporte, deleteTipotransporte } = require('../controllers/tipotransporte.controller')
apptset.get('/tipotransporte/', getTipotransportes);
apptset.get('/tipotransporte/:idtipotransporte', getOneTipotransporte);
apptset.post('/tipotransporte/', addTipotransporte);
apptset.put('/tipotransporte/:idtipotransporte', editTipotransporte);
apptset.put('/tipotransporte/delete/:idtipotransporte', deleteTipotransporte);

module.exports = apptset