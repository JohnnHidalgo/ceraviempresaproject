'use strict'

const quemaModels = require('../models/quema.model')

function getQuemas(req, res, next) {
    quemaModels.getQuemas((data, error) => {
        res.json(data)
    })
}

function getQuemaAllData(req, res, next) {
    quemaModels.getQuemaAllData((data, error) => {
        res.json(data)
    })
}

function getOneQuema(req, res) {
    const { idquema } = req.params
    quemaModels.getOneQuema({ idquema }, (data, error) => {
        res.json(data)
    })
}

function addQuema(req, res) {
    const { fecha,idhorno,camarainicio,camarafin,idgrupotrabajo,tx_user,tx_date, active } = req.body
    quemaModels.addQuema({ fecha,idhorno,camarainicio,camarafin,idgrupotrabajo,tx_user,tx_date, active }, (data, error) => {
        res.json(data)
    })
}

function editQuema(req, res) {
    const { idquema } = req.params
    const { fecha,idhorno,camarainicio,camarafin,idgrupotrabajo } = req.body
    quemaModels.editQuema({ idquema, fecha,idhorno,camarainicio,camarafin,idgrupotrabajo }, (data, error) => {
        res.json(data)
    })
}

function deleteQuema(req, res) {
    const { idquema } = req.params
    quemaModels.deleteQuema(idquema, (data, error) => {
        res.json(data)
    })
}

module.exports = {
    getQuemas,
    getQuemaAllData,
    getOneQuema,
    addQuema,
    editQuema,
    deleteQuema
}