export class CantidadUbicacion {
    constructor(public idcantidadubicacion: number, public cantidad: number, public fecha:String, public tx_user:String, public tx_date:any, public active:boolean) {}
}

export class CreateCantidadUbicacion {
    constructor(public cantidad: number, public fecha:String, public tx_user:String, public tx_date:any, public active:boolean) {}
}