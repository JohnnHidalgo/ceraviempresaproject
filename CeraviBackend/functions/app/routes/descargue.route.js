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

const { getDescargues, getDescargueAllData, getOneDescargue, addDescargue, editDescargue, deleteDescargue } = require('../controllers/descargue.controller')
apptset.get('/descargue/', getDescargues);
apptset.get('/descargue/alldata', getDescargueAllData);
apptset.get('/descargue/:iddescargue', getOneDescargue);
apptset.post('/descargue/', addDescargue);
apptset.put('/descargue/:iddescargue', editDescargue);
apptset.put('/descargue/delete/:iddescargue', deleteDescargue);

module.exports = apptset