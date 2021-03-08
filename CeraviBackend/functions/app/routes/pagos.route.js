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

const { getPagos, getPagoAllData, getOnePago, addPago, editPago, deletePago } = require('../controllers/pagos.controller')
apptset.get('/pago/', getPagos);
apptset.get('/pago/alldata/', getPagoAllData);
apptset.get('/pago/:idpagos', getOnePago);
apptset.post('/pago/', addPago);
apptset.put('/pago/:idpagos', editPago);
apptset.put('/pago/delete/:idpagos', deletePago);

module.exports = apptset