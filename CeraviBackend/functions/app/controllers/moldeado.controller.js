'use strict'

const moldeadoModels = require('../models/moldeado.model')

function getMoldeados(req, res, next) {
    moldeadoModels.getMoldeados((data, error) => {
        res.json(data)
    })
}

function getOneMoldeado(req, res) {
    const { idmoldeado } = req.params
    moldeadoModels.getOneMoldeado({ idmoldeado }, (data, error) => {
        res.json(data)
    })
}

function addMoldeado(req, res) {
    const { fecha, idtrabajadorgrupotrabajo, cantidad, idubicacion, idladrillo, tx_user, tx_date, active } = req.body
    moldeadoModels.addMoldeado({ fecha, idtrabajadorgrupotrabajo, cantidad, idubicacion, idladrillo, tx_user, tx_date, active }, (data, error) => {
        res.json(data)
    })
}

function editMoldeado(req, res) {
    const { idmoldeado } = req.params
    const { fecha, idtrabajadorgrupotrabajo, cantidad, idubicacion, idladrillo } = req.body
    moldeadoModels.editMoldeado({ idmoldeado, fecha, idtrabajadorgrupotrabajo, cantidad, idubicacion, idladrillo }, (data, error) => {
        res.json(data)
    })
}

function deleteMoldeado(req, res) {
    const { idmoldeado } = req.params
    moldeadoModels.deleteMoldeado(idmoldeado, (data, error) => {
        res.json(data)
    })
}

module.exports = {
    getMoldeados,
    getOneMoldeado,
    addMoldeado,
    editMoldeado,
    deleteMoldeado
}