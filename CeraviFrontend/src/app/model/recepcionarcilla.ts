export class Recepcionarcilla {
    constructor(public idrecepcionarcilla: number, public fecha: any, public idtransporte: number, public idarcilla: number, public costo: number, public tx_user:String, public tx_date:any, public active:boolean) {}
}

export class RecepcionarcillaAllData {
    constructor(public idrecepcionarcilla: number, public fecha: any, public nombre: String, public conductor: String, public origen: String, public costo:number) {}
}

export class CreateRecepcionarcilla {
    constructor(public fecha: any, public idtransporte: number, public idarcilla: number, public costo: number, public tx_user:String, public tx_date:any, public active:boolean) {}
}