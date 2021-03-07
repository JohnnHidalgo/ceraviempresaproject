'use strict'

const connection = require('../../config/connection')

var tipopagoModels = {
    getTipoPagos: (callback) => {
        if (connection) {
            let sql = `select * from tipodepago where active=true`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    getOneTipoPago: (data, callback) => {
        console.log(`idtipotransporte : ${data}`)
        if (connection) {
            let sql = `select * from tipodepago where idtipodepago = ${connection.escape(data.idtipodepago)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    addTipoPago: (data, callback) => {
        if (connection) {
            let sql = `insert into tipodepago(tipo,tx_user,tx_date, active) values (${connection.escape(data.tipo)}, ${connection.escape(data.tx_user)}, ${connection.escape(data.tx_date)}, ${connection.escape(data.active)})`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'tipodepago insertado' })
            })
        }
    },
    editTipoPago: (data, callback) => {
        if (connection) {
            let sql = `update tipodepago set tipo = ${connection.escape(data.tipo)} where idtipodepago = ${connection.escape(data.idtipodepago)}`
            console.log(sql);
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'tipodepago actualizado' })
            })
        }
    },
    deleteTipoPago: (data, callback) => {
        if (connection) {
            let sql = `update tipodepago set active = false where idtipodepago = ${connection.escape(data)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'tipodepago eliminado' })
            })
        }
    }
}

module.exports = tipopagoModels