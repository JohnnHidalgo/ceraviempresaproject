'use strict'

const ubicacioncantidadubicacionModels = require('../models/ubicacioncantidadubicacion.model')

function getUbicacioncantidadubicacions(req, res, next) {
    ubicacioncantidadubicacionModels.getUbicacioncantidadubicacions((data, error) => {
        res.json(data)
    })
}

function getOneUbicacioncantidadubicacion(req, res) {
    const { idubicacioncantidadubicacion } = req.params
    ubicacioncantidadubicacionModels.getOneUbicacioncantidadubicacion({ idubicacioncantidadubicacion }, (data, error) => {
        res.json(data)
    })
}

function addUbicacioncantidadubicacion(req, res) {
    const { idubicacion, idcantidadubicacion, tx_user, tx_date, active } = req.body
    ubicacioncantidadubicacionModels.addUbicacioncantidadubicacion({ idubicacion, idcantidadubicacion, tx_user, tx_date, active }, (data, error) => {
        res.json(data)
    })
}

function editUbicacioncantidadubicacion(req, res) {
    const { idubicacioncantidadubicacion } = req.params
    const { idubicacion, idcantidadubicacion } = req.body
    ubicacioncantidadubicacionModels.editUbicacioncantidadubicacion({ idubicacioncantidadubicacion, idubicacion, idcantidadubicacion }, (data, error) => {
        res.json(data)
    })
}

function deleteUbicacioncantidadubicacion(req, res) {
    const { idubicacioncantidadubicacion } = req.params
    ubicacioncantidadubicacionModels.deleteUbicacioncantidadubicacion(idubicacioncantidadubicacion, (data, error) => {
        res.json(data)
    })
}

module.exports = {
    getUbicacioncantidadubicacions,
    getOneUbicacioncantidadubicacion,
    addUbicacioncantidadubicacion,
    editUbicacioncantidadubicacion,
    deleteUbicacioncantidadubicacion
}