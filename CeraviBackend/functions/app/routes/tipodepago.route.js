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

const { getTipoPagos, getOneTipoPago, addTipoPago, editTipoPago, deleteTipoPago } = require('../controllers/tipodepago.controler')
apptset.get('/tipopago/', getTipoPagos);
apptset.get('/tipopago/:idtipodepago', getOneTipoPago);
apptset.post('/tipopago/', addTipoPago);
apptset.put('/tipopago/:idtipodepago', editTipoPago);
apptset.put('/tipopago/delete/:idtipodepago', deleteTipoPago);

module.exports = apptset