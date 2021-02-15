'use strict'

const connection = require('../../config/connection')

var hornoModels = {
    getHornos: (callback) => {
        if (connection) {
            let sql = `select * from horno where active=true`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    getOneHorno: (data, callback) => {
        console.log(`idhorno : ${data}`)
        if (connection) {
            let sql = `select * from horno where idhorno = ${connection.escape(data.idhorno)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    addHorno: (data, callback) => {
        if (connection) {
            let sql = `insert into horno(nombre,tx_user,tx_date, active) values (${connection.escape(data.nombre)}, ${connection.escape(data.tx_user)}, ${connection.escape(data.tx_date)}, ${connection.escape(data.active)})`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'horno insertado' })
            })
        }
    },
    editHorno: (data, callback) => {
        if (connection) {
            let sql = `update horno set nombre = ${connection.escape(data.nombre)} where idhorno = ${connection.escape(data.idhorno)}`
            console.log(sql);
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'horno actualizado' })
            })
        }
    },
    deleteHorno: (data, callback) => {
        if (connection) {
            let sql = `update horno set active = false where idhorno = ${connection.escape(data)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'horno eliminado' })
            })
        }
    }
}

module.exports = hornoModels