export class TipoTransporte {
    constructor(public idtipotransporte: number, public tipo: String, public tx_user:String, public tx_date:any, public active:boolean) {}
}

export class CreateTipoTransporte {
    constructor(public tipo: String, public tx_user:String, public tx_date:any, public active:boolean) {}
}