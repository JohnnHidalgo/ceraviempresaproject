export class Ubicacion {
    constructor(public idubicacion: number, public nombreplaya: String, public tx_user:String, public tx_date:any, public active:boolean) {}
}

export class CreateUbicacion {
    constructor(public nombreplaya: String, public tx_user:String, public tx_date:any, public active:boolean) {}
}