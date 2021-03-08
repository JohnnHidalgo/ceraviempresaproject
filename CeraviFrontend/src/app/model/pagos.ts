export class Pago {
    constructor(public idpagos: number, public monto: number,  public idtipodepago: number, public tx_user:String, public tx_date:any, public active:boolean) {}
}

export class PagoAllData {
    constructor(public idpagos: number, public monto: number, public tipo:String) {}
}

export class CreatePago {
    constructor(public monto: number,  public idtipodepago: number, public tx_user:String, public tx_date:any, public active:boolean) {}
}