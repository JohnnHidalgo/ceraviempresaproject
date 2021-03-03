export class Cargue {
    constructor(public idcargue: number, public fecha: any, public idhorno: number, public camarainicio: String, public camarafin: String, public idgrupotrabajo: number, public idubicacion: number, public cantidad: number, public tx_user:String, public tx_date:any, public active:boolean) {}
}

export class CargueAllData {
    constructor(public idcargue: number, public fecha: any, public nombre: String, public camarainicio: String, public camarafin: String, public descripcion: String, public nombreplaya: String, public cantidad: number) {}
}

export class CreateCargue {
    constructor(public fecha: any, public idhorno: number, public camarainicio: String, public camarafin: String, public idgrupotrabajo: number, public idubicacion: number, public cantidad: number, public tx_user:String, public tx_date:any, public active:boolean) {}
}