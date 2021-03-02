export class Cargue {
    constructor(public idcargue: number, public fecha: any, public idhorno: number, public camarainicio: String, public camarafin: String, public idgrupotrabajo: number, public idubicacion: number, public cantidad: number, public idladrillo: number, public tx_user:String, public tx_date:any, public active:boolean) {}
}

export class CargueAllData {
    constructor(public idmoldeado: number, public fecha: any, public cantidad: number, public descripcion: String, public nombreplaya: String, public tipo: String) {}
}

export class CreateCargue {
    constructor(public idcargue: number, public fecha: any, public idhorno: number, public camarainicio: String, public camarafin: String, public idgrupotrabajo: number, public idubicacion: number, public cantidad: number, public idladrillo: number, public tx_user:String, public tx_date:any, public active:boolean) {}
}