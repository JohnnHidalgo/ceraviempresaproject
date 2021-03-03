'use strict'

const connection = require('../../config/connection')

var cargueModels = {
    getCargues: (callback) => {
        if (connection) {
            let sql = `select * from cargue where active=true`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    getCargueAlldata: (callback) => {
        if (connection) {
            let sql = `select a.idcargue, a.fecha, b.nombre, a.camarainicio, a.camarafin, c.descripcion, d.nombreplaya, a.cantidad from cargue a, horno b, grupotrabajo c, ubicacion d where a.idhorno = b.idhorno and a.idgrupotrabajo = c.idgrupotrabajo and a.idubicacion = d.idubicacion and a.active=true`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    getOneCargue: (data, callback) => {
        console.log(`idcargue : ${data}`)
        if (connection) {
            let sql = `select * from cargue where idcargue = ${connection.escape(data.idcargue)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    addCargue: (data, callback) => {
        if (connection) {
            let sql = `insert into cargue(fecha,idhorno,camarainicio,camarafin,idgrupotrabajo,idubicacion,cantidad,tx_user,tx_date, active) values (${connection.escape(data.fecha)},${connection.escape(data.idhorno)},${connection.escape(data.camarainicio)},${connection.escape(data.camarafin)},${connection.escape(data.idgrupotrabajo)},${connection.escape(data.idubicacion)},${connection.escape(data.cantidad)}, ${connection.escape(data.tx_user)}, ${connection.escape(data.tx_date)}, ${connection.escape(data.active)})`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'cargue insertado' })
            })
        }
    },
    editCargue: (data, callback) => {
        if (connection) {
            let sql = `update cargue set fecha = ${connection.escape(data.fecha)},idhorno = ${connection.escape(data.idhorno)},camarainicio = ${connection.escape(data.camarainicio)},camarafin = ${connection.escape(data.camarafin)},idgrupotrabajo = ${connection.escape(data.idgrupotrabajo)},idubicacion = ${connection.escape(data.idubicacion)},cantidad = ${connection.escape(data.cantidad)} where idcargue = ${connection.escape(data.idcargue)}`
            console.log(sql);
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'cargue actualizado' })
            })
        }
    },
    deleteCargue: (data, callback) => {
        if (connection) {
            let sql = `update cargue set active = false where idcargue = ${connection.escape(data)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'cargue eliminado' })
            })
        }
    }
}

module.exports = cargueModels