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

const { getControlquemas, getOneControlquema, addControlquema, editControlquema, deleteControlquema } = require('../controllers/controlquema.controller')
apptset.get('/controlquema/', getControlquemas);
apptset.get('/controlquema/:idcontrolquema', getOneControlquema);
apptset.post('/controlquema/', addControlquema);
apptset.put('/controlquema/:idcontrolquema', editControlquema);
apptset.put('/controlquema/delete/:idcontrolquema', deleteControlquema);

module.exports = apptset