'use strict'

const hornoModels = require('../models/horno.model')

function getHornos(req, res, next) {
    hornoModels.getHornos((data, error) => {
        res.json(data)
    })
}

function getOneHorno(req, res) {
    const { idhorno } = req.params
    hornoModels.getOneHorno({ idhorno }, (data, error) => {
        res.json(data)
    })
}

function addHorno(req, res) {
    const { nombre, tx_user, tx_date, active } = req.body
    hornoModels.addHorno({ nombre, tx_user, tx_date, active }, (data, error) => {
        res.json(data)
    })
}

function editHorno(req, res) {
    const { idhorno } = req.params
    const { nombre } = req.body
    hornoModels.editHorno({ idhorno, nombre }, (data, error) => {
        res.json(data)
    })
}

function deleteHorno(req, res) {
    const { idhorno } = req.params
    hornoModels.deleteHorno(idhorno, (data, error) => {
        res.json(data)
    })
}

module.exports = {
    getHornos,
    getOneHorno,
    addHorno,
    editHorno,
    deleteHorno
}