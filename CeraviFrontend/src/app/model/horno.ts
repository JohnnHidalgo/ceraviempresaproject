export class Horno {
    constructor(public idhorno: number, public nombre: String, public tx_user:String, public tx_date:any, public active:boolean) {}
}

export class CreateHorno {
    constructor(public nombre: String, public tx_user:String, public tx_date:any, public active:boolean) {}
}