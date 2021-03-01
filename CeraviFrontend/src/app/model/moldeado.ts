export class Moldeado {
    constructor(public idmoldeado: number, public fecha: any, public idgrupotrabajo: number, public cantidad: number, public idubicacion: number, public idladrillo: number, public tx_user:String, public tx_date:any, public active:boolean) {}
}

export class MoldeadoAllData {
    constructor(public idmoldeado: number, public fecha: any, public cantidad: number, public descripcion: String, public nombreplaya: String, public tipo: String) {}
}

export class CreateMoldeado {
    constructor(public fecha: any, public idgrupotrabajo: number, public cantidad: number, public idubicacion: number, public idladrillo: number, public tx_user:String, public tx_date:any, public active:boolean) {}
}