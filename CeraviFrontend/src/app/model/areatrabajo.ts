export class AreaTrabajo {
    constructor(public idareatrabajo: number, public area: String, public tx_user:String, public tx_date:any, public active:boolean) {}
}

export class CreateAreaTrabajo {
    constructor(public area: String, public tx_user:String, public tx_date:any, public active:boolean) {}
}