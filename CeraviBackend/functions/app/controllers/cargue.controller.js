'use strict'

const cargueModels = require('../models/cargue.model')

function getCargues(req, res, next) {
    cargueModels.getCargues((data, error) => {
        res.json(data)
    })
}

function getCargueAlldata(req, res, next) {
    cargueModels.getCargueAlldata((data, error) => {
        res.json(data)
    })
}

function getOneCargue(req, res) {
    const { idcargue } = req.params
    cargueModels.getOneCargue({ idcargue }, (data, error) => {
        res.json(data)
    })
}

function addCargue(req, res) {
    const { fecha, idhorno, camarainicio, camarafin, idgrupotrabajo, idubicacion, cantidad, tx_user, tx_date, active } = req.body
    cargueModels.addCargue({ fecha, idhorno, camarainicio, camarafin, idgrupotrabajo, idubicacion, cantidad, tx_user, tx_date, active }, (data, error) => {
        res.json(data)
    })
}

function editCargue(req, res) {
    const { idcargue } = req.params
    const { fecha, idhorno, camarainicio, camarafin, idgrupotrabajo, idubicacion, cantidad } = req.body
    cargueModels.editCargue({ idcargue, fecha, idhorno, camarainicio, camarafin, idgrupotrabajo, idubicacion, cantidad }, (data, error) => {
        res.json(data)
    })
}

function deleteCargue(req, res) {
    const { idcargue } = req.params
    cargueModels.deleteCargue(idcargue, (data, error) => {
        res.json(data)
    })
}

module.exports = {
    getCargues,
    getCargueAlldata,
    getOneCargue,
    addCargue,
    editCargue,
    deleteCargue
}