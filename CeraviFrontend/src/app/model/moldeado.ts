export class Moldeado {
    constructor(public idmoldeado: number, public fecha: any, public idtrabajadorgrupotrabajo: number, public cantidad: number, public idubicacion: number, public idladrillo: number, public tx_user:String, public tx_date:any, public active:boolean) {}
}

export class CreateMoldeado {
    constructor(public fecha: any, public idtrabajadorgrupotrabajo: number, public cantidad: number, public idubicacion: number, public idladrillo: number, public tx_user:String, public tx_date:any, public active:boolean) {}
}