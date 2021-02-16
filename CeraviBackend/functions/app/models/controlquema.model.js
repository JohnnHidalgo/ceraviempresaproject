'use strict'

const connection = require('../../config/connection')

var controlquemaModels = {
    getControlquemas: (callback) => {
        if (connection) {
            let sql = `select * from controlquema where active=true`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    getOneControlquema: (data, callback) => {
        console.log(`idcooperativa : ${data}`)
        if (connection) {
            let sql = `select * from controlquema where idcontrolquema = ${connection.escape(data.idcontrolquema)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    addControlquema: (data, callback) => {
        if (connection) {
            let sql = `insert into controlquema(idhorno,fechainicio,fechafin,valorgas,tx_user,tx_date, active) values (${connection.escape(data.idhorno)},${connection.escape(data.fechainicio)},${connection.escape(data.fechafin)},${connection.escape(data.valorgas)}, ${connection.escape(data.tx_user)}, ${connection.escape(data.tx_date)}, ${connection.escape(data.active)})`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'controlquema insertado' })
            })
        }
    },
    editControlquema: (data, callback) => {
        if (connection) {
            let sql = `update controlquema set idhorno = ${connection.escape(data.idhorno)}, fechainicio = ${connection.escape(data.fechainicio)}, fechafin = ${connection.escape(data.fechafin)}, valorgas = ${connection.escape(data.valorgas)} where idcontrolquema = ${connection.escape(data.idcontrolquema)}`
            console.log(sql);
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'controlquema actualizado' })
            })
        }
    },
    deleteControlquema: (data, callback) => {
        if (connection) {
            let sql = `update controlquema set active = false where idcontrolquema = ${connection.escape(data)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'controlquema eliminado' })
            })
        }
    }
}

module.exports = controlquemaModels