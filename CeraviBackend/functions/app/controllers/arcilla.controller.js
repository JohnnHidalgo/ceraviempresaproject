'use strict'

const arcillaModels = require('../models/arcilla.model')

function getArcillas(req, res, next) {
    arcillaModels.getArcillas((data, error) => {
        res.json(data)
    })
}

function getOneArcilla(req, res) {
    const { idarcilla } = req.params
    arcillaModels.getOneArcilla({ idarcilla }, (data, error) => {
        res.json(data)
    })
}

function addArcilla(req, res) {
    const { origen, tx_user, tx_date, active } = req.body
    arcillaModels.addArcilla({ origen, tx_user, tx_date, active }, (data, error) => {
        res.json(data)
    })
}

function editArcilla(req, res) {
    const { idarcilla } = req.params
    const { origen } = req.body
    arcillaModels.editArcilla({ idarcilla, origen }, (data, error) => {
        res.json(data)
    })
}

function deleteArcilla(req, res) {
    const { idarcilla } = req.params
    arcillaModels.deleteCooperativa(idarcilla, (data, error) => {
        res.json(data)
    })
}

module.exports = {
    getArcillas,
    getOneArcilla,
    addArcilla,
    editArcilla,
    deleteArcilla
}