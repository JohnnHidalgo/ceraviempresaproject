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

const { getQuemas, getQuemaAllData, getOneQuema, addQuema, editQuema, deleteQuema } = require('../controllers/quema.controller')
apptset.get('/quema/', getQuemas);
apptset.get('/quema/alldata', getQuemaAllData);
apptset.get('/quema/:idquema', getOneQuema);
apptset.post('/quema/', addQuema);
apptset.put('/quema/:idquema', editQuema);
apptset.put('/quema/delete/:idquema', deleteQuema);

module.exports = apptset