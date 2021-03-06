'use strict'

const quemacontrolModels = require('../models/quemacontrol.model')

function getControlQuemas(req, res, next) {
    quemacontrolModels.getQuemaControl((data, error) => {
        res.json(data)
    })
}

function getQuemaControlAllData(req, res, next) {
    quemacontrolModels.getQuemaControlAllData((data, error) => {
        res.json(data)
        console.log(`testes : ${data}`)
    })
}

function getOneControlQuema(req, res) {
    const { idcontrolquema } = req.params
    quemacontrolModels.getOneQuemaControl({ idcontrolquema }, (data, error) => {
        res.json(data)
    })
}

function addControlQuema(req, res) {
    const { fechainicio,fechafin,valorgas,tx_user,tx_date, active } = req.body
    quemacontrolModels.addQuemaControl({ fechainicio,fechafin,valorgas,tx_user,tx_date, active }, (data, error) => {
        res.json(data)
    })
}

function editControlQuema(req, res) {
    const { idcontrolquema } = req.params
    const { fechainicio,fechafin,valorgas,tx_user,tx_date, active } = req.body
    quemacontrolModels.editQuema({ idcontrolquema,fechainicio,fechafin,valorgas,tx_user,tx_date, active }, (data, error) => {
        res.json(data)
    })
}

function deleteControlQuema(req, res) {
    const { idcontrolquema } = req.params
    quemacontrolModels.deleteQuema(idcontrolquema, (data, error) => {
        res.json(data)
    })
}

module.exports = {
    getControlQuemas,
    getQuemaControlAllData,
    getOneControlQuema,
    addControlQuema,
    editControlQuema,
    deleteControlQuema
}