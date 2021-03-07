'use strict'

const tipopagoModels = require('../models/tipodepago.model')

function getTipoPagos(req, res, next) {
    tipopagoModels.getTipoPagos((data, error) => {
        res.json(data)
    })
}

function getOneTipoPago(req, res) {
    const { idtipodepago } = req.params
    tipopagoModels.getOneTipoPago({ idtipodepago }, (data, error) => {
        res.json(data)
    })
}

function addTipoPago(req, res) {
    const { tipo, tx_user, tx_date, active } = req.body
    tipopagoModels.addTipoPago({ tipo, tx_user, tx_date, active }, (data, error) => {
        res.json(data)
    })
}

function editTipoPago(req, res) {
    const { idtipodepago } = req.params
    const { tipo } = req.body
    tipopagoModels.editTipoPago({ idtipodepago, tipo }, (data, error) => {
        res.json(data)
    })
}

function deleteTipoPago(req, res) {
    const { idtipodepago } = req.params
    tipopagoModels.deleteTipoPago(idtipodepago, (data, error) => {
        res.json(data)
    })
}

module.exports = {
    getTipoPagos,
    getOneTipoPago,
    addTipoPago,
    editTipoPago,
    deleteTipoPago
}