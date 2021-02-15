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

const { getArcillas, getOneArcilla, editArcilla, deleteArcilla } = require('../controllers/arcilla.controller')
apptset.get('/arcilla/', getArcillas);
apptset.get('/arcilla/:idarcilla', getOneArcilla);
apptset.post('/arcilla/', editArcilla);
apptset.put('/arcilla/:idarcilla', editArcilla);
apptset.put('/arcilla/delete/:idarcilla', deleteArcilla);

module.exports = apptset