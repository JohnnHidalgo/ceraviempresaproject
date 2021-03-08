'use strict'

const pagoModels = require('../models/pagos.model')

function getPagos(req, res, next) {
    pagoModels.getPagos((data, error) => {
        res.json(data)
    })
}

function getPagoAllData(req, res, next) {
    pagoModels.getPagoAllData((data, error) => {
        res.json(data)
    })
}

function getOnePago(req, res) {
    const { idpagos } = req.params
    pagoModels.getOnePago({ idpagos }, (data, error) => {
        res.json(data)
    })
}

function addPago(req, res) {
    const { monto, idtipodepago, tx_user, tx_date, active } = req.body
    pagoModels.addPago({ monto, idtipodepago, tx_user, tx_date, active }, (data, error) => {
        res.json(data)
    })
}

function editPago(req, res) {
    const { idpagos } = req.params
    const { monto, idtipodepago } = req.body
    pagoModels.editPago({ idpagos, monto, idtipodepago }, (data, error) => {
        res.json(data)
    })
}

function deletePago(req, res) {
    const { idpagos } = req.params
    pagoModels.deletePago(idpagos, (data, error) => {
        res.json(data)
    })
}

module.exports = {
    getPagos,
    getPagoAllData,
    getOnePago,
    addPago,
    editPago,
    deletePago
}