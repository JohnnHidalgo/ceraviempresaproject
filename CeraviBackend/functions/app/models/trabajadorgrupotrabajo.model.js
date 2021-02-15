'use strict'

const connection = require('../../config/connection')

var trabajadorgrupotrabajoModels = {
    getTrabajadorGrupoTrabajos: (callback) => {
        if (connection) {
            let sql = `select * from trabajadorgrupotrabajo where active=true`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    getOneTrabajadorGrupoTrabajo: (data, callback) => {
        console.log(`idtrabajadorgrupotrabajo : ${data}`)
        if (connection) {
            let sql = `select * from trabajadorgrupotrabajo where idtrabajadorgrupotrabajo = ${connection.escape(data.idtrabajadorgrupotrabajo)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback(rows)
            })
        }
    },
    addTrabajadorGrupoTrabajo: (data, callback) => {
        if (connection) {
            let sql = `insert into trabajadorgrupotrabajo(idgrupotrabajo, idtrabajador, tx_user,tx_date, active) values (${connection.escape(data.idgrupotrabajo)},${connection.escape(data.idtrabajador)}, ${connection.escape(data.tx_user)}, ${connection.escape(data.tx_date)}, ${connection.escape(data.active)})`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'trabajadorgrupotrabajo insertado' })
            })
        }
    },
    editTrabajadorGrupoTrabajo: (data, callback) => {
        if (connection) {
            let sql = `update trabajadorgrupotrabajo set idgrupotrabajo = ${connection.escape(data.idgrupotrabajo)}, idtrabajador = ${connection.escape(data.idtrabajador)} where idtrabajadorgrupotrabajo = ${connection.escape(data.idtrabajadorgrupotrabajo)}`
            console.log(sql);
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'trabajadorgrupotrabajo actualizado' })
            })
        }
    },
    deleteTrabajadorGrupoTrabajo: (data, callback) => {
        if (connection) {
            let sql = `update trabajadorgrupotrabajo set active = false where idtrabajadorgrupotrabajo = ${connection.escape(data)}`
            connection.query(sql, (error, rows) => {
                if (error) throw error
                callback({ message: 'trabajadorgrupotrabajo eliminado' })
            })
        }
    }
}

module.exports = trabajadorgrupotrabajoModels