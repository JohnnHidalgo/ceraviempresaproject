'use strict'

const transporteModels = require('../models/transporte.model')

function getTransporte(req, res, next) {
    transporteModels.getTransporte((data, error) => {
        res.json(data)
    })
}

function getTransporteAllData(req, res, next) {
    transporteModels.getTransporteAllData((data, error) => {
        res.json(data)
    })
}

function getOneTransporte(req, res) {
    const { idtransporte } = req.params
    transporteModels.getOneTransporte({ idtransporte }, (data, error) => {
        res.json(data)
    })
}

function addTransporte(req, res) {
    const { placa, conductor, dueno, idcooperativa, idtipotransporte, tx_user, tx_date, active } = req.body
    transporteModels.addTransporte({ placa, conductor, dueno, idcooperativa, idtipotransporte, tx_user, tx_date, active }, (data, error) => {
        res.json(data)
    })
}

function editTransporte(req, res) {
    const { idtransporte } = req.params
    const { placa, conductor, dueno, idcooperativa, idtipotransporte } = req.body
    transporteModels.editTransporte({ idtransporte, placa, conductor, dueno, idcooperativa, idtipotransporte }, (data, error) => {
        res.json(data)
    })
}

function deleteTransporte(req, res) {
    const { idtransporte } = req.params
    transporteModels.deleteTransporte(idtransporte, (data, error) => {
        res.json(data)
    })
}

module.exports = {
    getTransporte,
    getTransporteAllData,
    getOneTransporte,
    addTransporte,
    editTransporte,
    deleteTransporte
}