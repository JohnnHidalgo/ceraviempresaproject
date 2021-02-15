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

const { getTrabajadorGrupoTrabajos, getOneTrabajadorGrupoTrabajo, addTrabajadorGrupoTrabajo, editTrabajadorGrupoTrabajo, deleteTrabajadorGrupoTrabajo } = require('../controllers/trabajadorgrupotrabajo.controller')
apptset.get('/trabajadorgrupotrabajo/', getTrabajadorGrupoTrabajos);
apptset.get('/trabajadorgrupotrabajo/:idtrabajadorgrupotrabajo', getOneTrabajadorGrupoTrabajo);
apptset.post('/trabajadorgrupotrabajo/', addTrabajadorGrupoTrabajo);
apptset.put('/trabajadorgrupotrabajo/:idtrabajadorgrupotrabajo', editTrabajadorGrupoTrabajo);
apptset.put('/trabajadorgrupotrabajo/delete/:idtrabajadorgrupotrabajo', deleteTrabajadorGrupoTrabajo);

module.exports = apptset