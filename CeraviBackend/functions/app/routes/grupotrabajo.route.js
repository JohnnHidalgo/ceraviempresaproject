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

const { getGrupoTrabajos, getOneGrupoTrabajo, addGrupoTrabajo, editGrupoTrabajo, deleteGrupoTrabajo } = require('../controllers/grupotrabajo.controller')
apptset.get('/grupotrabajo/', getGrupoTrabajos);
apptset.get('/grupotrabajo/:idgrupotrabajo', getOneGrupoTrabajo);
apptset.post('/grupotrabajo/', addGrupoTrabajo);
apptset.put('/grupotrabajo/:idcooperativa', editGrupoTrabajo);
apptset.put('/grupotrabajo/delete/:idgrupotrabajo', deleteGrupoTrabajo);

module.exports = apptset