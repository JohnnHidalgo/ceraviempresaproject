export class TrabajadorGrupoTrabajo {
    constructor(public idtrabajadorgrupotrabajo: number, public idgrupotrabajo: number, public idtrabajador: number, public tx_user:String, public tx_date:any, public active:boolean) {}
}

export class CreateTrabajadorGrupoTrabajo {
    constructor(public idgrupotrabajo: number, public idtrabajador: number, public tx_user:String, public tx_date:any, public active:boolean) {}
}