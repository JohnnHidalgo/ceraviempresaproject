export class UbicacionCantidadUbicacion {
    constructor(public idubicacioncantidadubicacion: number, public idubicacion: number, public idcantidadubicacion: number, public tx_user:String, public tx_date:any, public active:boolean) {}
}

export class CreateUbicacionCantidadUbicacion {
    constructor(public idubicacion: number, public idcantidadubicacion: number, public tx_user:String, public tx_date:any, public active:boolean) {}
}