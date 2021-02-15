'use strict'

const ladrilloModels = require('../models/ladrillo.model')

function getLadrillos(req, res, next) {
    ladrilloModels.getLadrillos((data, error) => {
        res.json(data)
    })
}

function getOneLadrillo(req, res) {
    const { idladrillo } = req.params
    ladrilloModels.getOneLadrillo({ idladrillo }, (data, error) => {
        res.json(data)
    })
}

function addLadrillo(req, res) {
    const { tipo, tx_user, tx_date, active } = req.body
    ladrilloModels.addLadrillo({ tipo, tx_user, tx_date, active }, (data, error) => {
        res.json(data)
    })
}

function editLadrillo(req, res) {
    const { idladrillo } = req.params
    const { tipo } = req.body
    ladrilloModels.editLadrillo({ idladrillo, tipo }, (data, error) => {
        res.json(data)
    })
}

function deleteLadrillo(req, res) {
    const { idladrillo } = req.params
    ladrilloModels.deleteLadrillo(idladrillo, (data, error) => {
        res.json(data)
    })
}

module.exports = {
    getLadrillos,
    getOneLadrillo,
    addLadrillo,
    editLadrillo,
    deleteLadrillo
}