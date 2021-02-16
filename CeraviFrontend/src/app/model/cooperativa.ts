export class Cooperativa {
    constructor(public idcooperativa: number, public nombre: String, public tx_user:String, public tx_date:any, public active:boolean) {}
}

export class CreateCooperativa {
    constructor(public nombre: String, public tx_user:String, public tx_date:any, public active:boolean) {}
}