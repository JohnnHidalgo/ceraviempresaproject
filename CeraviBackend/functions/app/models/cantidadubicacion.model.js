'use strict'

const connection = require('../../config/connection')

var cantidadubicacionModels = {
    getCantidadubicacions: (callback) => {
        if (connection) {
            let sql = `select * from cantidadubicacion where active=true`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    getOneCantidadubicacion: (data, callback) => {
        console.log(`idcantidadubicacion : ${data}`)
        if (connection) {
            let sql = `select * from cantidadubicacion where idcantidadubicacion = ${connection.escape(data.idcantidadubicacion)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    addCantidadubicacion: (data, callback) => {
        if (connection) {
            let sql = `insert into cantidadubicacion(cantidad,fecha,tx_user,tx_date, active) values (${connection.escape(data.cantidad)}, ${connection.escape(data.fecha)}, ${connection.escape(data.tx_user)}, ${connection.escape(data.tx_date)}, ${connection.escape(data.active)})`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'cantidadubicacion insertado' })
            })
        }
    },
    editCantidadubicacion: (data, callback) => {
        if (connection) {
            let sql = `update cantidadubicacion set cantidad = ${connection.escape(data.cantidad)},  fecha = ${connection.escape(data.fecha)} where idcantidadubicacion = ${connection.escape(data.idcantidadubicacion)}`
            console.log(sql);
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'cantidadubicacion actualizado' })
            })
        }
    },
    deleteCantidadubicacion: (data, callback) => {
        if (connection) {
            let sql = `update cantidadubicacion set active = false where idcantidadubicacion = ${connection.escape(data)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'cantidadubicacion eliminado' })
            })
        }
    }
}

module.exports = cantidadubicacionModels