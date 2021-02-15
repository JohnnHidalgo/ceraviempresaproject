'use strict'

const connection = require('../../config/connection')

var ladrilloModels = {
    getLadrillos: (callback) => {
        if (connection) {
            let sql = `select * from ladrillo where active=true`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    getOneLadrillo: (data, callback) => {
        console.log(`idladrillo : ${data}`)
        if (connection) {
            let sql = `select * from ladrillo where idladrillo = ${connection.escape(data.idladrillo)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    addLadrillo: (data, callback) => {
        if (connection) {
            let sql = `insert into ladrillo(tipo,tx_user,tx_date, active) values (${connection.escape(data.tipo)}, ${connection.escape(data.tx_user)}, ${connection.escape(data.tx_date)}, ${connection.escape(data.active)})`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'ladrillo insertado' })
            })
        }
    },
    editLadrillo: (data, callback) => {
        if (connection) {
            let sql = `update ladrillo set tipo = ${connection.escape(data.tipo)} where idladrillo = ${connection.escape(data.idladrillo)}`
            console.log(sql);
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'ladrillo actualizado' })
            })
        }
    },
    deleteLadrillo: (data, callback) => {
        if (connection) {
            let sql = `update ladrillo set active = false where idladrillo = ${connection.escape(data)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'ladrillo eliminado' })
            })
        }
    }
}

module.exports = ladrilloModels