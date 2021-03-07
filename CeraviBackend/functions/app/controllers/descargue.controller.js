'use strict'

const descargueModels = require('../models/descargue.model')

function getDescargues(req, res, next) {
    descargueModels.getDescargues((data, error) => {
        res.json(data)
    })
}

function getDescargueAllData(req, res, next) {
    descargueModels.getDescargueAllData((data, error) => {
        res.json(data)
    })
}

function getOneDescargue(req, res) {
    const { iddescargue } = req.params
    descargueModels.getOneDescargue({ iddescargue }, (data, error) => {
        res.json(data)
    })
}

function addDescargue(req, res) {
    const { fecha, idhorno, camarainicio, camarafin, idgrupotrabajo, idcliente, idladrillo, idtransporte, cantidad, tx_user, tx_date, active } = req.body
    descargueModels.addDescargue({ fecha, idhorno, camarainicio, camarafin, idgrupotrabajo, idcliente, idladrillo, idtransporte, cantidad, tx_user, tx_date, active }, (data, error) => {
        res.json(data)
    })
}

function editDescargue(req, res) {
    const { iddescargue } = req.params
    const { fecha, idhorno, camarainicio, camarafin, idgrupotrabajo, idcliente, idladrillo, idtransporte, cantidad } = req.body
    descargueModels.editDescargue({ iddescargue, fecha, idhorno, camarainicio, camarafin, idgrupotrabajo, idcliente, idladrillo, idtransporte, cantidad }, (data, error) => {
        res.json(data)
    })
}

function deleteDescargue(req, res) {
    const { iddescargue } = req.params
    descargueModels.deleteDescargue(iddescargue, (data, error) => {
        res.json(data)
    })
}

module.exports = {
    getDescargues,
    getDescargueAllData,
    getOneDescargue,
    addDescargue,
    editDescargue,
    deleteDescargue
}