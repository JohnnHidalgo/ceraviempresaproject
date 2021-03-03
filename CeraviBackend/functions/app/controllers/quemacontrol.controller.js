'use strict'

const quemaModels = require('../models/quemacontrol.model')

function getControlQuemas(req, res, next) {
    quemaModels.getQuemaControl((data, error) => {
        res.json(data)
    })
}

function getControlQuemaAllData(req, res, next) {
    quemaModels.getQuemaControlAllData((data, error) => {
        res.json(data)
    })
}

function getOneControlQuema(req, res) {
    const { idcontrolquema } = req.params
    quemaModels.getOneQuemaControl({ idcontrolquema }, (data, error) => {
        res.json(data)
    })
}

function addControlQuema(req, res) {
    const { fechainicio,fechafin,valorgas,tx_user,tx_date, active } = req.body
    quemaModels.addQuemaControl({ fechainicio,fechafin,valorgas,tx_user,tx_date, active }, (data, error) => {
        res.json(data)
    })
}

function editControlQuema(req, res) {
    const { idcontrolquema } = req.params
    const { fechainicio,fechafin,valorgas,tx_user,tx_date, active } = req.body
    quemaModels.editQuema({ idcontrolquema,fechainicio,fechafin,valorgas,tx_user,tx_date, active }, (data, error) => {
        res.json(data)
    })
}

function deleteControlQuema(req, res) {
    const { idcontrolquema } = req.params
    quemaModels.deleteQuema(idcontrolquema, (data, error) => {
        res.json(data)
    })
}

module.exports = {
    getControlQuemas,
    getControlQuemaAllData,
    getOneControlQuema,
    addControlQuema,
    editControlQuema,
    deleteControlQuema
}