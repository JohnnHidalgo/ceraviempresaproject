'use strict'

const recepcionarcillaModels = require('../models/recepcionarcilla.model')

function getRecepcionarcillas(req, res, next) {
    recepcionarcillaModels.getRecepcionarcillas((data, error) => {
        res.json(data)
    })
}

function getRecepcionarcillasAllData(req, res, next) {
    recepcionarcillaModels.getRecepcionarcillasAllData((data, error) => {
        res.json(data)
    })
}

function getOneRecepcionarcilla(req, res) {
    const { idrecepcionarcilla } = req.params
    recepcionarcillaModels.getOneRecepcionarcilla({ idrecepcionarcilla }, (data, error) => {
        res.json(data)
    })
}

function addRecepcionarcilla(req, res) {
    const { fecha, idtransporte, idarcilla, costo, tx_user, tx_date, active } = req.body
    recepcionarcillaModels.addRecepcionarcilla({ fecha, idtransporte, idarcilla, costo, tx_user, tx_date, active }, (data, error) => {
        res.json(data)
    })
}

function editRecepcionarcilla(req, res) {
    const { idrecepcionarcilla } = req.params
    const { fecha, idtransporte, idarcilla, costo } = req.body
    recepcionarcillaModels.editRecepcionarcilla({ idrecepcionarcilla, fecha, idtransporte, idarcilla, costo }, (data, error) => {
        res.json(data)
    })
}

function deleteRecepcionarcilla(req, res) {
    const { idrecepcionarcilla } = req.params
    recepcionarcillaModels.deleteRecepcionarcilla(idrecepcionarcilla, (data, error) => {
        res.json(data)
    })
}

module.exports = {
    getRecepcionarcillas,
    getRecepcionarcillasAllData,
    getOneRecepcionarcilla,
    addRecepcionarcilla,
    editRecepcionarcilla,
    deleteRecepcionarcilla
}