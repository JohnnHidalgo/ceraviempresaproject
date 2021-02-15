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

const { getLadrillos, getOneLadrillo, addLadrillo, editLadrillo, deleteLadrillo } = require('../controllers/ladrillo.controller')
apptset.get('/ladrillo/', getLadrillos);
apptset.get('/ladrillo/:idladrillo', getOneLadrillo);
apptset.post('/ladrillo/', addLadrillo);
apptset.put('/ladrillo/:idladrillo', editLadrillo);
apptset.put('/ladrillo/delete/:idladrillo', deleteLadrillo);

module.exports = apptset