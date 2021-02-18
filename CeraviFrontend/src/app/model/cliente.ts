export class Cliente {
    constructor(public idcliente: number, public nombre: String, public departamento: String, public ubicacion: String, public celular: String, public nit: String, public tx_user:String, public tx_date:any, public active:boolean) {}
}

export class CreateCliente {
    constructor(public nombre: String, public departamento: String, public ubicacion: String, public celular: String, public nit: String, public tx_user:String, public tx_date:any, public active:boolean) {}
}