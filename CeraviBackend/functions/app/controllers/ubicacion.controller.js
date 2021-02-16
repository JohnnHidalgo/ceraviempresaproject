'use strict'

const ubicacionModels = require('../models/ubicacion.model')

function getUbicacions(req, res, next) {
    ubicacionModels.getUbicacions((data, error) => {
        res.json(data)
    })
}

function getOneUbicacion(req, res) {
    const { idubicacion } = req.params
    ubicacionModels.getOneUbicacion({ idubicacion }, (data, error) => {
        res.json(data)
    })
}

function addUbicacion(req, res) {
    const { nombreplaya, tx_user, tx_date, active } = req.body
    ubicacionModels.addUbicacion({ nombreplaya, tx_user, tx_date, active }, (data, error) => {
        res.json(data)
    })
}

function editUbicacion(req, res) {
    const { idubicacion } = req.params
    const { nombreplaya } = req.body
    ubicacionModels.editUbicacion({ idubicacion, nombreplaya }, (data, error) => {
        res.json(data)
    })
}

function deleteUbicacion(req, res) {
    const { idubicacion } = req.params
    ubicacionModels.deleteUbicacion(idubicacion, (data, error) => {
        res.json(data)
    })
}

module.exports = {
    getUbicacions,
    getOneUbicacion,
    addUbicacion,
    editUbicacion,
    deleteUbicacion
}