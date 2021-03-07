export class Descargue {
    constructor(public iddescargue: number, public fecha: any, public idhorno: number, public camarainicio: String, public camarafin: String, public idgrupotrabajo: number, public idcliente: number, public idladrillo: number, public idtransporte: number, public cantidad: number, public tx_user:String, public tx_date:any, public active:boolean) {}
}

export class DescargueAllData {
    constructor( public iddescargue: number, public fecha: any, public nombre: String, public camarainicio: String, public camarafin: String, public descripcion: String, public nombrecompleto: String, public departamento: String, public tipo: String, public conductor: String, public placa: String ) {}
}

export class CreateDescargue {
    constructor(public fecha: any, public idhorno: number, public camarainicio: String, public camarafin: String, public idgrupotrabajo: number, public idcliente: number, public idladrillo: number, public idtransporte: number, public cantidad: number, public tx_user:String, public tx_date:any, public active:boolean) {}
}