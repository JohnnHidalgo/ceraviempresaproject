'use strict'

const connection = require('../../config/connection')

var tipotransporteModels = {
    getTipotransportes: (callback) => {
        if (connection) {
            let sql = `select * from tipotransporte where active=true`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    getOneTipotransporte: (data, callback) => {
        console.log(`idtipotransporte : ${data}`)
        if (connection) {
            let sql = `select * from tipotransporte where idtipotransporte = ${connection.escape(data.idtipotransporte)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    addTipotransporte: (data, callback) => {
        if (connection) {
            let sql = `insert into tipotransporte(tipo,tx_user,tx_date, active) values (${connection.escape(data.tipo)}, ${connection.escape(data.tx_user)}, ${connection.escape(data.tx_date)}, ${connection.escape(data.active)})`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'tipotransporte insertado' })
            })
        }
    },
    editTipotransporte: (data, callback) => {
        if (connection) {
            let sql = `update tipotransporte set tipo = ${connection.escape(data.tipo)} where idtipotransporte = ${connection.escape(data.idtipotransporte)}`
            console.log(sql);
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'tipotransporteModels actualizado' })
            })
        }
    },
    deleteTipotransporte: (data, callback) => {
        if (connection) {
            let sql = `update tipotransporte set active = false where idtipotransporte = ${connection.escape(data)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'tipotransporte eliminado' })
            })
        }
    }
}

module.exports = tipotransporteModels