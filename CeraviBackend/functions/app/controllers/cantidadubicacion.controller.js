'use strict'

const cantidadubicacionModels = require('../models/cantidadubicacion.model')

function getCantidadubicacions(req, res, next) {
    cantidadubicacionModels.getCantidadubicacions((data, error) => {
        res.json(data)
    })
}

function getOneCantidadubicacion(req, res) {
    const { idcantidadubicacion } = req.params
    cantidadubicacionModels.getOneCantidadubicacion({ idcantidadubicacion }, (data, error) => {
        res.json(data)
    })
}

function addCantidadubicacion(req, res) {
    const { cantidad, fecha, tx_user, tx_date, active } = req.body
    cantidadubicacionModels.addCantidadubicacion({ cantidad, fecha, tx_user, tx_date, active }, (data, error) => {
        res.json(data)
    })
}

function editCantidadubicacion(req, res) {
    const { idcantidadubicacion } = req.params
    const { cantidad, fecha } = req.body
    cantidadubicacionModels.editCantidadubicacion({ idcantidadubicacion, cantidad, fecha }, (data, error) => {
        res.json(data)
    })
}

function deleteCantidadubicacion(req, res) {
    const { idcantidadubicacion } = req.params
    cantidadubicacionModels.deleteCantidadubicacion(idcantidadubicacion, (data, error) => {
        res.json(data)
    })
}

module.exports = {
    getCantidadubicacions,
    getOneCantidadubicacion,
    addCantidadubicacion,
    editCantidadubicacion,
    deleteCantidadubicacion
}