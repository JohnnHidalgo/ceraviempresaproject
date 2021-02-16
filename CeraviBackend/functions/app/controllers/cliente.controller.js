'use strict'

const clienteModels = require('../models/cliente.model')

function getClientes(req, res, next) {
    clienteModels.getClientes((data, error) => {
        res.json(data)
    })
}

function getOneCliente(req, res) {
    const { idcliente } = req.params
    clienteModels.getOneCliente({ idcliente }, (data, error) => {
        res.json(data)
    })
}

function addCliente(req, res) {
    const { nombre, departamento, ubicacion, celular, nit, tx_user, tx_date, active } = req.body
    clienteModels.addCliente({ nombre, departamento, ubicacion, celular, nit, tx_user, tx_date, active }, (data, error) => {
        res.json(data)
    })
}

function editCliente(req, res) {
    const { idcliente } = req.params
    const { nombre, departamento, ubicacion, celular, nit } = req.body
    clienteModels.editCliente({ idcliente, nombre, departamento, ubicacion, celular, nit }, (data, error) => {
        res.json(data)
    })
}

function deleteCliente(req, res) {
    const { idcliente } = req.params
    clienteModels.deleteCliente(idcliente, (data, error) => {
        res.json(data)
    })
}

module.exports = {
    getClientes,
    getOneCliente,
    addCliente,
    editCliente,
    deleteCliente
}