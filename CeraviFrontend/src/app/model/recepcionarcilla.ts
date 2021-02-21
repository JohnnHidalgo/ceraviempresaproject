export class Recepcionarcilla {
    constructor(public idrecepcionarcilla: number, public fecha: any, public idtransporte: number, public idarcilla: number, public costo: number, public tx_user:String, public tx_date:any, public active:boolean) {}
}

export class CreateRecepcionarcilla {
    constructor(public fecha: any, public idtransporte: number, public idarcilla: number, public costo: number, public tx_user:String, public tx_date:any, public active:boolean) {}
}