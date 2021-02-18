export class Trabajador {
    constructor(public idtrabajador: number, public nombre: String, public ci: String, public tx_user:String, public tx_date:any, public active:boolean) {}
}

export class CreateTrabajador {
    constructor(public nombre: String, public ci: String, public tx_user:String, public tx_date:any, public active:boolean) {}
}