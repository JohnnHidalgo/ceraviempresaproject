'use strict'

const connection = require('../../config/connection')

var transporteModels = {
    getTransporte: (callback) => {
        if (connection) {
            let sql = `select * from transporte where active=true`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    getOneTransporte: (data, callback) => {
        console.log(`idtransporte : ${data}`)
        if (connection) {
            let sql = `select * from transporte where idtransporte = ${connection.escape(data.idtransporte)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    addTransporte: (data, callback) => {
        if (connection) {
            let sql = `insert into transporte(placa,conductor,dueño,idcooperativa,idtipotransporte,tx_user,tx_date, active) values (${connection.escape(data.placa)},${connection.escape(data.conductor)},${connection.escape(data.dueño)},${connection.escape(data.idcooperativa)},${connection.escape(data.idtipotransporte)}, ${connection.escape(data.tx_user)}, ${connection.escape(data.tx_date)}, ${connection.escape(data.active)})`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'transporte insertado' })
            })
        }
    },

    editProduct: (data, callback) => {
        if (connection) {
            let sql = `update producto set productname = ${connection.escape(data.productname)},description = ${connection.escape(data.description)}, price = ${connection.escape(data.price)},quantity = ${connection.escape(data.quantity)} where idproducto = ${connection.escape(data.idproducto)}`
            console.log(sql);
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'document actualizado' })
            })
        }
    },

    editTransporte: (data, callback) => {
        if (connection) {
            let sql = `update transporte set placa = ${connection.escape(data.placa)}, conductor = ${connection.escape(data.conductor)}, dueño = ${connection.escape(data.dueño)}, idcooperativa = ${connection.escape(data.idcooperativa)}, idtipotransporte = ${connection.escape(data.idtipotransporte)} where idtransporte = ${connection.escape(data.idtransporte)}`
            console.log(sql);
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'transporte actualizado' })
            })
        }
    },
    deleteTransporte: (data, callback) => {
        if (connection) {
            let sql = `update transporte set active = false where idtransporte = ${connection.escape(data)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'transporte eliminado' })
            })
        }
    }
}

module.exports = transporteModels