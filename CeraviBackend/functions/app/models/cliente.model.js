'use strict'

const connection = require('../../config/connection')

var clienteModels = {
    getClientes: (callback) => {
        if (connection) {
            let sql = `select * from cliente where active=true`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    getOneCliente: (data, callback) => {
        console.log(`idcliente : ${data}`)
        if (connection) {
            let sql = `select * from cliente where idcliente = ${connection.escape(data.idcliente)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    addCliente: (data, callback) => {
        if (connection) {
            let sql = `insert into cliente(nombrecompleto,departamento,ubicacion,celular,nit,tx_user,tx_date, active) values (${connection.escape(data.nombrecompleto)},${connection.escape(data.departamento)},${connection.escape(data.ubicacion)},${connection.escape(data.celular)},${connection.escape(data.nit)}, ${connection.escape(data.tx_user)}, ${connection.escape(data.tx_date)}, ${connection.escape(data.active)})`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'cliente insertado' })
            })
        }
    },
    editCliente: (data, callback) => {
        if (connection) {
            let sql = `update cliente set nombrecompleto = ${connection.escape(data.nombrecompleto)}, departamento = ${connection.escape(data.departamento)}, ubicacion = ${connection.escape(data.ubicacion)}, celular = ${connection.escape(data.celular)}, nit = ${connection.escape(data.nit)} where idcliente = ${connection.escape(data.idcliente)}`
            console.log(sql);
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'cliente actualizado' })
            })
        }
    },
    deleteCliente: (data, callback) => {
        if (connection) {
            let sql = `update cliente set active = false where idcliente = ${connection.escape(data)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'cliente eliminado' })
            })
        }
    }
}

module.exports = clienteModels