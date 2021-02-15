'use strict'

const trabajadorgrupotrabajoModels = require('../models/trabajadorgrupotrabajo.model')

function getTrabajadorGrupoTrabajos(req, res, next) {
    trabajadorgrupotrabajoModels.getTrabajadorGrupoTrabajos((data, error) => {
        res.json(data)
    })
}

function getOneTrabajadorGrupoTrabajo(req, res) {
    const { idtrabajadorgrupotrabajo } = req.params
    trabajadorgrupotrabajoModels.getOneTrabajadorGrupoTrabajo({ idtrabajadorgrupotrabajo }, (data, error) => {
        res.json(data)
    })
}

function addTrabajadorGrupoTrabajo(req, res) {
    const { idgrupotrabajo, idtrabajador, tx_user, tx_date, active } = req.body
    trabajadorgrupotrabajoModels.addTrabajadorGrupoTrabajo({ idgrupotrabajo, idtrabajador, tx_user, tx_date, active }, (data, error) => {
        res.json(data)
    })
}

function editTrabajadorGrupoTrabajo(req, res) {
    const { idtrabajadorgrupotrabajo } = req.params
    const { idgrupotrabajo, idtrabajador } = req.body
    trabajadorgrupotrabajoModels.editTrabajadorGrupoTrabajo({ idtrabajadorgrupotrabajo, idgrupotrabajo, idtrabajador }, (data, error) => {
        res.json(data)
    })
}

function deleteTrabajadorGrupoTrabajo(req, res) {
    const { idtrabajadorgrupotrabajo } = req.params
    trabajadorgrupotrabajoModels.deleteTrabajadorGrupoTrabajo(idtrabajadorgrupotrabajo, (data, error) => {
        res.json(data)
    })
}

module.exports = {
    getTrabajadorGrupoTrabajos,
    getOneTrabajadorGrupoTrabajo,
    addTrabajadorGrupoTrabajo,
    editTrabajadorGrupoTrabajo,
    deleteTrabajadorGrupoTrabajo
}