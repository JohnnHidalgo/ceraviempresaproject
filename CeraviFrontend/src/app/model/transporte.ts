export class Transporte {
    constructor(public idtransporte: number, public placa: String, public conductor: String, public dueno: String, public idcooperativa: number, public idtipotransporte: number, public tx_user:String, public tx_date:any, public active:boolean) {}
}

export class CreateTransporte {
    constructor(public placa: String, public conductor: String, public dueno: String, public idcooperativa: number, public idtipotransporte: number, public tx_user:String, public tx_date:any, public active:boolean) {}
}