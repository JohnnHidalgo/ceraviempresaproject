'use strict'

const connection = require('../../config/connection')

var ubicacioncantidadubicacionModels = {
    getUbicacioncantidadubicacions: (callback) => {
        if (connection) {
            let sql = `select * from ubicacioncantidadubicacion where active=true`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    getOneUbicacioncantidadubicacion: (data, callback) => {
        console.log(`idubicacioncantidadubicacion : ${data}`)
        if (connection) {
            let sql = `select * from ubicacioncantidadubicacion where idubicacioncantidadubicacion = ${connection.escape(data.idubicacioncantidadubicacion)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    addUbicacioncantidadubicacion: (data, callback) => {
        if (connection) {
            let sql = `insert into ubicacioncantidadubicacion(idubicacion,idcantidadubicacion,tx_user,tx_date, active) values (${connection.escape(data.idubicacion)}, ${connection.escape(data.idcantidadubicacion)}, ${connection.escape(data.tx_user)}, ${connection.escape(data.tx_date)}, ${connection.escape(data.active)})`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'ubicacioncantidadubicacion insertado' })
            })
        }
    },
    editUbicacioncantidadubicacion: (data, callback) => {
        if (connection) {
            let sql = `update ubicacioncantidadubicacion set idubicacion = ${connection.escape(data.idubicacion)}, idcantidadubicacion = ${connection.escape(data.idcantidadubicacion)} where idubicacioncantidadubicacion = ${connection.escape(data.idubicacioncantidadubicacion)}`
            console.log(sql);
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'ubicacioncantidadubicacion actualizado' })
            })
        }
    },
    deleteUbicacioncantidadubicacion: (data, callback) => {
        if (connection) {
            let sql = `update ubicacioncantidadubicacion set active = false where idubicacioncantidadubicacion = ${connection.escape(data)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'ubicacioncantidadubicacion eliminado' })
            })
        }
    }
}

module.exports = ubicacioncantidadubicacionModels