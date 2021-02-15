'use strict'

const connection = require('../../config/connection')

var trabajadorModels = {
    getTrabajadors: (callback) => {
        if (connection) {
            let sql = `select * from trabajador where active=true`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    getOneTrabajador: (data, callback) => {
        console.log(`idtrabajador : ${data}`)
        if (connection) {
            let sql = `select * from trabajador where idtrabajador = ${connection.escape(data.idtrabajador)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    addTrabajador: (data, callback) => {
        if (connection) {
            let sql = `insert into trabajador(nombre,ci,tx_user,tx_date, active) values (${connection.escape(data.nombre)},${connection.escape(data.ci)}, ${connection.escape(data.tx_user)}, ${connection.escape(data.tx_date)}, ${connection.escape(data.active)})`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'trabajador insertado' })
            })
        }
    },
    editTrabajador: (data, callback) => {
        if (connection) {
            let sql = `update trabajador set nombre = ${connection.escape(data.nombre)}, ci = ${connection.escape(data.ci)} where idtrabajador = ${connection.escape(data.idtrabajador)}`
            console.log(sql);
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'trabajador actualizado' })
            })
        }
    },
    deleteTrabajador: (data, callback) => {
        if (connection) {
            let sql = `update trabajador set active = false where idtrabajador = ${connection.escape(data)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'trabajador eliminado' })
            })
        }
    }
}

module.exports = trabajadorModels