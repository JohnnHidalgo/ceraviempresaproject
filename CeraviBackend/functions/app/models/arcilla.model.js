'use strict'

const connection = require('../../config/connection')

var arcillaModels = {
    getArcillas: (callback) => {
        if (connection) {
            let sql = `select * from arcilla where active=true`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    getOneArcilla: (data, callback) => {
        console.log(`idarcilla : ${data}`)
        if (connection) {
            let sql = `select * from arcilla where idarcilla = ${connection.escape(data.idarcilla)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    addArcilla: (data, callback) => {
        if (connection) {
            let sql = `insert into arcilla(origen,tx_user,tx_date, active) values (${connection.escape(data.origen)}, ${connection.escape(data.tx_user)}, ${connection.escape(data.tx_date)}, ${connection.escape(data.active)})`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'arcilla insertado' })
            })
        }
    },
    editArcilla: (data, callback) => {
        if (connection) {
            let sql = `update arcilla set origen = ${connection.escape(data.origen)} where idarcilla = ${connection.escape(data.idarcilla)}`
            console.log(sql);
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'arcilla actualizado' })
            })
        }
    },
    deleteArcilla: (data, callback) => {
        if (connection) {
            let sql = `update arcilla set active = false where idarcilla = ${connection.escape(data)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'arcilla eliminado' })
            })
        }
    }
}

module.exports = arcillaModels