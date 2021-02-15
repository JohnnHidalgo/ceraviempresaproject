'use strict'

const connection = require('../../config/connection')

var areatrabajoModels = {
    getAreaTrabajos: (callback) => {
        if (connection) {
            let sql = `select * from areatrabajo where active=true`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    getOneAreaTrabajo: (data, callback) => {
        console.log(`idareatrabajo : ${data}`)
        if (connection) {
            let sql = `select * from areatrabajo where idareatrabajo = ${connection.escape(data.idareatrabajo)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    addAreaTrabajo: (data, callback) => {
        if (connection) {
            let sql = `insert into areatrabajo(area,tx_user,tx_date, active) values (${connection.escape(data.area)}, ${connection.escape(data.tx_user)}, ${connection.escape(data.tx_date)}, ${connection.escape(data.active)})`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'areatrabajo insertado' })
            })
        }
    },
    editAreaTrabajo: (data, callback) => {
        if (connection) {
            let sql = `update areatrabajo set area = ${connection.escape(data.area)} where idareatrabajo = ${connection.escape(data.idareatrabajo)}`
            console.log(sql);
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'areatrabajo actualizado' })
            })
        }
    },
    deleteAreaTrabajo: (data, callback) => {
        if (connection) {
            let sql = `update areatrabajo set active = false where idareatrabajo = ${connection.escape(data)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'areatrabajo eliminado' })
            })
        }
    }
}

module.exports = areatrabajoModels