export class Quema {
    constructor(public idquema: number, public fecha: any, public idhorno: number, public camarainicio: String, public camarafin: String, public idgrupotrabajo: number, public tx_user:String, public tx_date:any, public active:boolean) {}
}

export class QuemaAllData {
    constructor(public idquema: number, public fecha: any, public cantidad: number, public descripcion: String, public nombreplaya: String, public tipo: String) {}
}

export class CreateQuema {
    constructor(public fecha: any, public idhorno: number, public camarainicio: String, public camarafin: String, public idgrupotrabajo: number, public tx_user:String, public tx_date:any, public active:boolean) {}
}