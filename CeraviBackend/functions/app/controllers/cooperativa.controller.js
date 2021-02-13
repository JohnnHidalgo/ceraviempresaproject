'use strict'

const cooperativaModels = require('../models/cooperativa.model')

function getCooperativas(req, res, next) {
    cooperativaModels.getCooperativas((data, error) => {
        res.json(data)
    })
}

function getOneCooperativa(req, res) {
    const { idcooperativa } = req.params
    cooperativaModels.getOneCooperativa({ idcooperativa }, (data, error) => {
        res.json(data)
    })
}

function addCooperativa(req, res) {
    const { nombre, tx_user, tx_date, active } = req.body
    cooperativaModels.addCooperativa({ nombre, tx_user, tx_date, active }, (data, error) => {
        res.json(data)
    })
}

function editCooperativa(req, res) {
    const { idcooperativa } = req.params
    const { nombre } = req.body
    cooperativaModels.editCooperativa({ idcooperativa, nombre }, (data, error) => {
        res.json(data)
    })
}

function deleteCooperativa(req, res) {
    const { idcooperativa } = req.params
    cooperativaModels.deleteCooperativa(idcooperativa, (data, error) => {
        res.json(data)
    })
}

module.exports = {
    getCooperativas,
    getOneCooperativa,
    addCooperativa,
    editCooperativa,
    deleteCooperativa
}