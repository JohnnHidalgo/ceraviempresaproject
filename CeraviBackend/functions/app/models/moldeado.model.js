'use strict'

const connection = require('../../config/connection')

var moldeadoModels = {
    getMoldeados: (callback) => {
        if (connection) {
            let sql = `select * from moldeado where active=true`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    getMoldeadoAllData: (callback) => {
        if (connection) {
            let sql = `select  a.idmoldeado, a.fecha, a.cantidad, b.descripcion, c.nombreplaya, d.tipo from moldeado a, grupotrabajo b, ubicacion c, ladrillo d where a.idgrupotrabajo = b.idgrupotrabajo and a.idubicacion = c.idubicacion and a.idladrillo = d.idladrillo and a.active=true`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    getOneMoldeado: (data, callback) => {
        console.log(`idmoldeado : ${data}`)
        if (connection) {
            let sql = `select * from moldeado where idmoldeado = ${connection.escape(data.idmoldeado)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    addMoldeado: (data, callback) => {
        if (connection) {
            let sql = `insert into moldeado(fecha,idgrupotrabajo,cantidad,idubicacion,idladrillo,tx_user,tx_date, active) values (${connection.escape(data.fecha)},${connection.escape(data.idgrupotrabajo)},${connection.escape(data.cantidad)},${connection.escape(data.idubicacion)},${connection.escape(data.idladrillo)}, ${connection.escape(data.tx_user)}, ${connection.escape(data.tx_date)}, ${connection.escape(data.active)})`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'moldeado insertado' })
            })
        }
    },
    editMoldeado: (data, callback) => {
        if (connection) {
            let sql = `update moldeado set fecha = ${connection.escape(data.fecha)},idgrupotrabajo = ${connection.escape(data.idgrupotrabajo)},cantidad = ${connection.escape(data.cantidad)},idubicacion = ${connection.escape(data.idubicacion)},idladrillo = ${connection.escape(data.idladrillo)} where idmoldeado = ${connection.escape(data.idmoldeado)}`
            console.log(sql);
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'moldeado actualizado' })
            })
        }
    },
    deleteMoldeado: (data, callback) => {
        if (connection) {
            let sql = `update moldeado set active = false where idmoldeado = ${connection.escape(data)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'moldeado eliminado' })
            })
        }
    }
}

module.exports = moldeadoModels