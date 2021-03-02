'use strict'

const connection = require('../../config/connection')

var descargueModels = {
    getDescargues: (callback) => {
        if (connection) {
            let sql = `select * from descargue where active=true`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    getOneDescargue: (data, callback) => {
        console.log(`iddescargue : ${data}`)
        if (connection) {
            let sql = `select * from descargue where iddescargue = ${connection.escape(data.iddescargue)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    addDescargue: (data, callback) => {
        if (connection) {
            let sql = `insert into descargue(fecha,idhorno,camarainicio,camarafin,idgrupotrabajo,idcliente,idladrillo,idtransporte,cantidad,tx_user,tx_date, active) values (${connection.escape(data.fecha)},${connection.escape(data.idhorno)},${connection.escape(data.camarainicio)},${connection.escape(data.camarafin)},${connection.escape(data.idgrupotrabajo)},${connection.escape(data.idcliente)},${connection.escape(data.idladrillo)}, ${connection.escape(data.idtransporte)},${connection.escape(data.cantidad)},${connection.escape(data.tx_user)}, ${connection.escape(data.tx_date)}, ${connection.escape(data.active)})`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'cargue insertado' })
            })
        }
    },
    editDescargue: (data, callback) => {
        if (connection) {
            let sql = `update descargue set fecha = ${connection.escape(data.fecha)},idhorno = ${connection.escape(data.idhorno)},camarainicio = ${connection.escape(data.camarainicio)},camarafin = ${connection.escape(data.camarafin)},idgrupotrabajo = ${connection.escape(data.idgrupotrabajo)},idcliente = ${connection.escape(data.idcliente)},idladrillo = ${connection.escape(data.idladrillo)},idtransporte = ${connection.escape(data.idtransporte)},cantidad = ${connection.escape(data.cantidad)} where iddescargue = ${connection.escape(data.iddescargue)}`
            console.log(sql);
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'iddescargue actualizado' })
            })
        }
    },
    deleteDescargue: (data, callback) => {
        if (connection) {
            let sql = `update descargue set active = false where iddescargue = ${connection.escape(data)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'descargue eliminado' })
            })
        }
    }
}

module.exports = descargueModels