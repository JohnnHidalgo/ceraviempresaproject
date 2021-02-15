'use strict'

const areatrabajoModels = require('../models/areatrabajo.model')

function getAreaTrabajos(req, res, next) {
    areatrabajoModels.getAreaTrabajos((data, error) => {
        res.json(data)
    })
}

function getOneAreaTrabajo(req, res) {
    const { idareatrabajo } = req.params
    areatrabajoModels.getOneAreaTrabajo({ idareatrabajo }, (data, error) => {
        res.json(data)
    })
}

function addAreaTrabajo(req, res) {
    const { area, tx_user, tx_date, active } = req.body
    areatrabajoModels.addAreaTrabajo({ area, tx_user, tx_date, active }, (data, error) => {
        res.json(data)
    })
}

function editAreaTrabajo(req, res) {
    const { idareatrabajo } = req.params
    const { area } = req.body
    areatrabajoModels.editAreaTrabajo({ idareatrabajo, area }, (data, error) => {
        res.json(data)
    })
}

function deleteAreaTrabajo(req, res) {
    const { idareatrabajo } = req.params
    areatrabajoModels.deleteAreaTrabajo(idareatrabajo, (data, error) => {
        res.json(data)
    })
}

module.exports = {
    getAreaTrabajos,
    getOneAreaTrabajo,
    addAreaTrabajo,
    editAreaTrabajo,
    deleteAreaTrabajo
}