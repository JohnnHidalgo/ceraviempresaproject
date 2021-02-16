'use strict'

const controlquemaModels = require('../models/controlquema.model')

function getControlquemas(req, res, next) {
    controlquemaModels.getControlquemas((data, error) => {
        res.json(data)
    })
}

function getOneControlquema(req, res) {
    const { idcontrolquema } = req.params
    controlquemaModels.getOneControlquema({ idcontrolquema }, (data, error) => {
        res.json(data)
    })
}

function addControlquema(req, res) {
    const { idhorno, fechainicio, fechafin, valorgas, tx_user, tx_date, active } = req.body
    controlquemaModels.addControlquema({ idhorno, fechainicio, fechafin, valorgas, tx_user, tx_date, active }, (data, error) => {
        res.json(data)
    })
}

function editControlquema(req, res) {
    const { idcontrolquema } = req.params
    const { idhorno, fechainicio, fechafin, valorgas } = req.body
    controlquemaModels.editControlquema({ idcontrolquema, idhorno, fechainicio, fechafin, valorgas }, (data, error) => {
        res.json(data)
    })
}

function deleteControlquema(req, res) {
    const { idcontrolquema } = req.params
    controlquemaModels.deleteControlquema(idcontrolquema, (data, error) => {
        res.json(data)
    })
}

module.exports = {
    getControlquemas,
    getOneControlquema,
    addControlquema,
    editControlquema,
    deleteControlquema
}