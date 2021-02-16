'use strict'

const connection = require('../../config/connection')

var quemaModels = {
    getQuemas: (callback) => {
        if (connection) {
            let sql = `select * from quema where active=true`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    getOneQuema: (data, callback) => {
        console.log(`idquema : ${data}`)
        if (connection) {
            let sql = `select * from quema where idquema = ${connection.escape(data.idquema)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    addQuema: (data, callback) => {
        if (connection) {
            let sql = `insert into quema(fecha,idhorno,camarainicio,camarafin,idtrabajadorgrupotrabajo,tx_user,tx_date, active) values (${connection.escape(data.fecha)},${connection.escape(data.idhorno)},${connection.escape(data.camarainicio)},${connection.escape(data.camarafin)},${connection.escape(data.idtrabajadorgrupotrabajo)}, ${connection.escape(data.tx_user)}, ${connection.escape(data.tx_date)}, ${connection.escape(data.active)})`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'quema insertado' })
            })
        }
    },
    editQuema: (data, callback) => {
        if (connection) {
            let sql = `update quema set fecha = ${connection.escape(data.fecha)},idhorno = ${connection.escape(data.idhorno)},camarainicio = ${connection.escape(data.camarainicio)},camarafin = ${connection.escape(data.camarafin)},idtrabajadorgrupotrabajo = ${connection.escape(data.idtrabajadorgrupotrabajo)} where idquema = ${connection.escape(data.idquema)}`
            console.log(sql);
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'quema actualizado' })
            })
        }
    },
    deleteQuema: (data, callback) => {
        if (connection) {
            let sql = `update quema set active = false where idquema = ${connection.escape(data)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'quema eliminado' })
            })
        }
    }
}

module.exports = quemaModels