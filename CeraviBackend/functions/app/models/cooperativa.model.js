'use strict'

const connection = require('../../config/connection')

var cooperativaModels = {
    getCooperativas: (callback) => {
        if (connection) {
            let sql = `select * from cooperativa where active=true`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    getOneCooperativa: (data, callback) => {
        console.log(`idcooperativa : ${data}`)
        if (connection) {
            let sql = `select * from cooperativa where idcooperativa = ${connection.escape(data.idcooperativa)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    addCooperativa: (data, callback) => {
        if (connection) {
            let sql = `insert into cooperativa(nombre,tx_user,tx_date, active) values (${connection.escape(data.nombre)}, ${connection.escape(data.tx_user)}, ${connection.escape(data.tx_date)}, ${connection.escape(data.active)})`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'cooperativa insertado' })
            })
        }
    },
    editCooperativa: (data, callback) => {
        if (connection) {
            let sql = `update cooperativa set nombre = ${connection.escape(data.nombre)} where idcooperativa = ${connection.escape(data.idcooperativa)}`
            console.log(sql);
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'cooperativa actualizado' })
            })
        }
    },
    deleteCooperativa: (data, callback) => {
        if (connection) {
            let sql = `update cooperativa set active = false where idcooperativa = ${connection.escape(data)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'cooperativa eliminado' })
            })
        }
    }
}

module.exports = cooperativaModels