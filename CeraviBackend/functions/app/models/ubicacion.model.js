'use strict'

const connection = require('../../config/connection')

var ubicacionModels = {
    getUbicacions: (callback) => {
        if (connection) {
            let sql = `select * from ubicacion where active=true`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    getOneUbicacion: (data, callback) => {
        console.log(`idubicacion : ${data}`)
        if (connection) {
            let sql = `select * from ubicacion where idubicacion = ${connection.escape(data.idubicacion)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    addUbicacion: (data, callback) => {
        if (connection) {
            let sql = `insert into ubicacion(nombreplaya,tx_user,tx_date, active) values (${connection.escape(data.nombreplaya)}, ${connection.escape(data.tx_user)}, ${connection.escape(data.tx_date)}, ${connection.escape(data.active)})`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'ubicacion insertado' })
            })
        }
    },
    editUbicacion: (data, callback) => {
        if (connection) {
            let sql = `update ubicacion set nombreplaya = ${connection.escape(data.nombreplaya)} where idubicacion = ${connection.escape(data.idubicacion)}`
            console.log(sql);
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'ubicacion actualizado' })
            })
        }
    },
    deleteUbicacion: (data, callback) => {
        if (connection) {
            let sql = `update ubicacion set active = false where idubicacion = ${connection.escape(data)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'ubicacion eliminado' })
            })
        }
    }
}

module.exports = ubicacionModels