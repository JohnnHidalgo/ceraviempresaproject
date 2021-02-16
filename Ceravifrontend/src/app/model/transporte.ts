export class Transporte {
    constructor(public idtransporte: number, public placa: String, public conductor: String, public dueño: String, public idcooperativa: number, public idtipotransporte: number, public tx_user:String, public tx_date:String, public active:boolean) {}
}

export class CreateTransporte {
    constructor(public idtransporte: number, public placa: String, public conductor: String, public dueño: String, public idcooperativa: number, public idtipotransporte: number, public tx_user:String, public tx_date:String, public active:boolean) {}
}