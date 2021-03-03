'use strict'

const connection = require('../../config/connection')

var quemacontrolModels = {
    getQuemaControl: (callback) => {
        if (connection) {
            let sql = `select * from quemacontrol where active=true`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },

    getQuemaControlAllData: (callback) => {
        if (connection) {
            let sql = `select a.idcontrolquema, a.fechainicio, a.fechafin, a.valorgas, b.nombre from controlquema a, horno b where a.idhorno = b.idhorno and a.active = true`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },

    getOneQuemaControl: (data, callback) => {
        console.log(`idcontrolquema : ${data}`)
        if (connection) {
            let sql = `select * from controlquema where idcontrolquema = ${connection.escape(data.idcontrolquema)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    addQuemaControl: (data, callback) => {
        if (connection) {
            let sql = `insert into controlquema(idhorno,fechainicio,fechafin,valorgas,tx_user,tx_date, active) values (${connection.escape(data.idhorno)},${connection.escape(data.fechainicio)},${connection.escape(data.fechafin)},${connection.escape(data.valorgas)}, ${connection.escape(data.tx_user)}, ${connection.escape(data.tx_date)}, ${connection.escape(data.active)})`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'controlquema insertado' })
            })
        }
    },
    editQuemaControl: (data, callback) => {
        if (connection) {
            let sql = `update controlquema set fecha = ${connection.escape(data.fecha)},fechainicio = ${connection.escape(data.fechainicio)},fechafin = ${connection.escape(data.fechafin)},valorgas = ${connection.escape(data.valorgas)}where idcontrolquema = ${connection.escape(data.idcontrolquema)}`
            console.log(sql);
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'controlquema actualizado' })
            })
        }
    },
    deleteQuemaControl: (data, callback) => {
        if (connection) {
            let sql = `update controlquema set active = false where idcontrolquema = ${connection.escape(data)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'controlquema eliminado' })
            })
        }
    }
}

module.exports = quemacontrolModels