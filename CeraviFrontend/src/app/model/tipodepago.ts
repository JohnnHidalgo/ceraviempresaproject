export class TipoDePago {
    constructor(public idtipodepago: number, public tipo: String, public tx_user:String, public tx_date:any, public active:boolean) {}
}

export class CreateTipoDePago {
    constructor(public tipo: String, public tx_user:String, public tx_date:any, public active:boolean) {}
}