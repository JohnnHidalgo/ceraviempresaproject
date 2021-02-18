export class Ladrillo {
    constructor(public idladrillo: number, public tipo: String, public tx_user:String, public tx_date:any, public active:boolean) {}
}

export class CreateLadrillo {
    constructor(public tipo: String, public tx_user:String, public tx_date:any, public active:boolean) {}
}