'use strict'

const connection = require('../../config/connection')

var pagoModels = {
    getPagos: (callback) => {
        if (connection) {
            let sql = `select * from pagos where active=true`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    getPagoAllData: (callback) => {
        if (connection) {
            let sql = `select a.idpagos, a.monto, b.tipo from pagos a, tipodepago b where a.idtipodepago = b.idtipodepago and a.active=true`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    getOnePago: (data, callback) => {
        console.log(`idpagos : ${data}`)
        if (connection) {
            let sql = `select * from pagos where idpagos = ${connection.escape(data.idpagos)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    addPago: (data, callback) => {
        if (connection) {
            let sql = `insert into pagos(monto,idtipodepago,tx_user,tx_date, active) values (${connection.escape(data.monto)}, ${connection.escape(data.idtipodepago)}, ${connection.escape(data.tx_user)}, ${connection.escape(data.tx_date)}, ${connection.escape(data.active)})`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'pagos insertado' })
            })
        }
    },
    editPago: (data, callback) => {
        if (connection) {
            let sql = `update pagos set monto = ${connection.escape(data.monto)} , idtipodepago = ${connection.escape(data.idtipodepago)} where idpagos = ${connection.escape(data.idpagos)}`
            console.log(sql);
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'pagos actualizado' })
            })
        }
    },
    deletePago: (data, callback) => {
        if (connection) {
            let sql = `update pagos set active = false where idpagos = ${connection.escape(data)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'pagos eliminado' })
            })
        }
    }
}

module.exports = pagoModels