'use strict'

const connection = require('../../config/connection')

var grupotrabajoModels = {
    getGrupoTrabajos: (callback) => {
        if (connection) {
            let sql = `select * from grupotrabajo where active=true`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    getOneGrupoTrabajo: (data, callback) => {
        console.log(`idgrupotrabajo : ${data}`)
        if (connection) {
            let sql = `select * from grupotrabajo where idgrupotrabajo = ${connection.escape(data.idgrupotrabajo)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    addGrupoTrabajo: (data, callback) => {
        if (connection) {
            let sql = `insert into grupotrabajo(idareatrabajo, descripcion, tx_user,tx_date, active) values (${connection.escape(data.idareatrabajo)}, ${connection.escape(data.descripcion)}, ${connection.escape(data.tx_user)}, ${connection.escape(data.tx_date)}, ${connection.escape(data.active)})`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'grupotrabajo insertado' })
            })
        }
    },
    editGrupoTrabajo: (data, callback) => {
        if (connection) {
            let sql = `update grupotrabajo set idareatrabajo = ${connection.escape(data.idareatrabajo)}, descripcion = ${connection.escape(data.descripcion)} where idgrupotrabajo = ${connection.escape(data.idgrupotrabajo)}`
            console.log(sql);
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'grupotrabajo actualizado' })
            })
        }
    },
    deleteGrupoTrabajo: (data, callback) => {
        if (connection) {
            let sql = `update grupotrabajo set active = false where idgrupotrabajo = ${connection.escape(data)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'grupotrabajo eliminado' })
            })
        }
    }
}

module.exports = grupotrabajoModels