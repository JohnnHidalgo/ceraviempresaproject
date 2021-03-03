export class QuemaControl {
    constructor(public idcontrolquema: number, public idhorno: number, public fechainicio: any, public fechafin: any, public valorgas: number, public tx_user:String, public tx_date:any, public active:boolean) {}
}

export class QuemaControlAllData {
    constructor(public idmoldeado: number, public fecha: any, public cantidad: number, public descripcion: String, public nombreplaya: String, public tipo: String) {}
}

export class CreateQuemaControl {
    constructor(public idhorno: number, public fechainicio: any, public fechafin: any, public valorgas: number, public tx_user:String, public tx_date:any, public active:boolean) {}
}