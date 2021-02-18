export class Arcilla {
    constructor(public idarcilla: number, public origen: String, public tx_user:String, public tx_date:any, public active:boolean) {}
}

export class CreateArcilla {
    constructor(public origen: String, public tx_user:String, public tx_date:any, public active:boolean) {}
}