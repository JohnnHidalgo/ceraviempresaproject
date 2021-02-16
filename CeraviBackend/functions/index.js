const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
var express = require('express');
var apinode = express();
var cors = require('cors')

apinode.use(express.urlencoded({ extended: false }))
apinode.use(express.json())
apinode.use(require('./app/routes/cooperativa.route'))
apinode.use(require('./app/routes/tipotransporte.route'))
apinode.use(require('./app/routes/transporte.route'))
apinode.use(require('./app/routes/arcilla.route'))
apinode.use(require('./app/routes/trabajador.route'))
apinode.use(require('./app/routes/areatrabajo.route'))
apinode.use(require('./app/routes/grupotrabajo.route'))
apinode.use(require('./app/routes/trabajadorgrupotrabajo.route'))
apinode.use(require('./app/routes/ladrillo.route'))
apinode.use(require('./app/routes/horno.route'))
apinode.use(require('./app/routes/cantidadubicacion.route'))
apinode.use(require('./app/routes/ubicacion.route'))
apinode.use(require('./app/routes/ubicacioncantidadubicacion.route'))
apinode.use(require('./app/routes/cliente.route'))
apinode.use(require('./app/routes/recepcionarcilla.route'))
apinode.use(require('./app/routes/moldeado.route'))
apinode.use(require('./app/routes/cargue.route'))

apinode.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});


exports.ceravibackendservice = functions.https.onRequest(apinode);