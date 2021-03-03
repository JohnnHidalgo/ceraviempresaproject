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

const { getControlQuemas, getControlQuemaAllData, getOneControlQuema, addControlQuema, editControlQuema, deleteControlQuema } = require('../controllers/quemacontrol.controller')
apptset.get('/controlquema/', getControlQuemas);
apptset.get('/controlquema/alldata', getControlQuemaAllData);
apptset.get('/controlquema/:idcontrolquema', getOneControlQuema);
apptset.post('/controlquema/', addControlQuema);
apptset.put('/controlquema/:idcontrolquema', editControlQuema);
apptset.put('/controlquema/delete/:idcontrolquema', deleteControlQuema);

module.exports = apptset