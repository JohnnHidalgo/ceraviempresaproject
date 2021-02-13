'use strict'

const tipotransporteModels = require('../models/tipotransporte.model')

function getTipotransportes(req, res, next) {
    tipotransporteModels.getTipotransportes((data, error) => {
        res.json(data)
    })
}

function getOneTipotransporte(req, res) {
    const { idtipotransporte } = req.params
    tipotransporteModels.getOneTipotransporte({ idtipotransporte }, (data, error) => {
        res.json(data)
    })
}

function addTipotransporte(req, res) {
    const { tipo, tx_user, tx_date, active } = req.body
    tipotransporteModels.addTipotransporte({ tipo, tx_user, tx_date, active }, (data, error) => {
        res.json(data)
    })
}

function editTipotransporte(req, res) {
    const { idtipotransporte } = req.params
    const { tipo } = req.body
    tipotransporteModels.editTipotransporte({ idtipotransporte, tipo }, (data, error) => {
        res.json(data)
    })
}

function deleteTipotransporte(req, res) {
    const { idtipotransporte } = req.params
    tipotransporteModels.deleteTipotransporte(idtipotransporte, (data, error) => {
        res.json(data)
    })
}

module.exports = {
    getTipotransportes,
    getOneTipotransporte,
    addTipotransporte,
    editTipotransporte,
    deleteTipotransporte
}