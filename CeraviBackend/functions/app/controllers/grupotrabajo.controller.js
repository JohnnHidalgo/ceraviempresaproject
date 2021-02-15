'use strict'

const grupotrabajoModels = require('../models/grupotrabajo.model')

function getGrupoTrabajos(req, res, next) {
    grupotrabajoModels.getGrupoTrabajos((data, error) => {
        res.json(data)
    })
}

function getOneGrupoTrabajo(req, res) {
    const { idgrupotrabajo } = req.params
    grupotrabajoModels.getOneGrupoTrabajo({ idgrupotrabajo }, (data, error) => {
        res.json(data)
    })
}

function addGrupoTrabajo(req, res) {
    const { idareatrabajo, descripcion, tx_user, tx_date, active } = req.body
    grupotrabajoModels.addGrupoTrabajo({ idareatrabajo, descripcion, tx_user, tx_date, active }, (data, error) => {
        res.json(data)
    })
}

function editGrupoTrabajo(req, res) {
    const { idgrupotrabajo } = req.params
    const { idareatrabajo, descripcion } = req.body
    grupotrabajoModels.editGrupoTrabajo({ idgrupotrabajo, idareatrabajo, descripcion }, (data, error) => {
        res.json(data)
    })
}

function deleteGrupoTrabajo(req, res) {
    const { idgrupotrabajo } = req.params
    grupotrabajoModels.deleteGrupoTrabajo(idgrupotrabajo, (data, error) => {
        res.json(data)
    })
}

module.exports = {
    getGrupoTrabajos,
    getOneGrupoTrabajo,
    addGrupoTrabajo,
    editGrupoTrabajo,
    deleteGrupoTrabajo
}