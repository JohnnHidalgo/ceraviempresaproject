export class GrupoTrabajo {
    constructor(public idgrupotrabajo: number, public idareatrabajo: number, public descripcion:String, public tx_user:String, public tx_date:any, public active:boolean) {}
}

export class CreateGrupoTrabajo {
    constructor(public idareatrabajo: number, public descripcion:String, public tx_user:String, public tx_date:any, public active:boolean) {}
}