'use strict'

const trabajadorModels = require('../models/trabajador.model')

function getTrabajadors(req, res, next) {
    trabajadorModels.getTrabajadors((data, error) => {
        res.json(data)
    })
}

function getOneTrabajador(req, res) {
    const { idtrabajador } = req.params
    trabajadorModels.getOneTrabajador({ idtrabajador }, (data, error) => {
        res.json(data)
    })
}

function addTrabajador(req, res) {
    const { nombre, ci, tx_user, tx_date, active } = req.body
    trabajadorModels.addTrabajador({ nombre, ci, tx_user, tx_date, active }, (data, error) => {
        res.json(data)
    })
}

function editTrabajador(req, res) {
    const { idtrabajador } = req.params
    const { nombre, ci } = req.body
    trabajadorModels.editTrabajador({ idtrabajador, nombre, ci }, (data, error) => {
        res.json(data)
    })
}

function deleteTrabajador(req, res) {
    const { idtrabajador } = req.params
    trabajadorModels.deleteTrabajador(idtrabajador, (data, error) => {
        res.json(data)
    })
}

module.exports = {
    getTrabajadors,
    getOneTrabajador,
    addTrabajador,
    editTrabajador,
    deleteTrabajador
}