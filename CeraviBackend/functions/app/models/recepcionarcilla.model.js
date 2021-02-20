'use strict'

const connection = require('../../config/connection')

var recepcionarcillaModels = {
    getRecepcionarcillas: (callback) => {
        if (connection) {
            let sql = `select * from recepcionarcilla where active=true`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    getOneRecepcionarcilla: (data, callback) => {
        console.log(`idrecepcionarcilla : ${data}`)
        if (connection) {
            let sql = `select * from recepcionarcilla where idrecepcionarcilla = ${connection.escape(data.idrecepcionarcilla)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    addRecepcionarcilla: (data, callback) => {
        if (connection) {
            let sql = `insert into recepcionarcilla(fecha,idtransporte,idarcilla,costo,tx_user,tx_date, active) values (${connection.escape(data.fecha)},${connection.escape(data.idtransporte)},${connection.escape(data.idarcilla)}, ${connection.escape(data.costo)},${connection.escape(data.tx_user)}, ${connection.escape(data.tx_date)}, ${connection.escape(data.active)})`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'cooperativa insertado' })
            })
        }
    },
    editRecepcionarcilla: (data, callback) => {
        if (connection) {
            let sql = `update recepcionarcilla set fecha = ${connection.escape(data.fecha)}, idtransporte = ${connection.escape(data.idtransporte)}, idarcilla = ${connection.escape(data.idarcilla)}, costo = ${connection.escape(data.costo)} where idrecepcionarcilla = ${connection.escape(data.idrecepcionarcilla)}`
            console.log(sql);
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'recepcionarcilla actualizado' })
            })
        }
    },
    deleteRecepcionarcilla: (data, callback) => {
        if (connection) {
            let sql = `update recepcionarcilla set active = false where idrecepcionarcilla = ${connection.escape(data)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'recepcionarcilla eliminado' })
            })
        }
    }
}

module.exports = recepcionarcillaModels