'use strict'

const quemaModels = require('../models/quema.model')

function getQuemas(req, res, next) {
    quemaModels.getQuemas((data, error) => {
        res.json(data)
    })
}

function getOneQuema(req, res) {
    const { idcooperativa } = req.params
    quemaModels.getOneQuema({ idcooperativa }, (data, error) => {
        res.json(data)
    })
}

function addQuema(req, res) {
    const { nombre, tx_user, tx_date, active } = req.body
    quemaModels.addQuema({ nombre, tx_user, tx_date, active }, (data, error) => {
        res.json(data)
    })
}

function editQuema(req, res) {
    const { idcooperativa } = req.params
    const { nombre } = req.body
    quemaModels.editQuema({ idcooperativa, nombre }, (data, error) => {
        res.json(data)
    })
}

function deleteQuema(req, res) {
    const { idcooperativa } = req.params
    quemaModels.deleteQuema(idcooperativa, (data, error) => {
        res.json(data)
    })
}

module.exports = {
    getQuemas,
    getOneQuema,
    addQuema,
    editQuema,
    deleteQuema
}