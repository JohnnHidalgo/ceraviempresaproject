import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddarcillaComponent } from './view/arcilla/addarcilla/addarcilla.component';
import { EditarcillaComponent } from './view/arcilla/editarcilla/editarcilla.component';
import { ListarcillaComponent } from './view/arcilla/listarcilla/listarcilla.component';
import { AddareatrabajoComponent } from './view/areatrabajo/addareatrabajo/addareatrabajo.component';
import { EditareatrabajoComponent } from './view/areatrabajo/editareatrabajo/editareatrabajo.component';
import { ListareatrabajoComponent } from './view/areatrabajo/listareatrabajo/listareatrabajo.component';
import { AddcargueComponent } from './view/cargue/addcargue/addcargue.component';
import { EditcargueComponent } from './view/cargue/editcargue/editcargue.component';
import { ListcargueComponent } from './view/cargue/listcargue/listcargue.component';
import { AddclienteComponent } from './view/cliente/addcliente/addcliente.component';
import { EditclienteComponent } from './view/cliente/editcliente/editcliente.component';
import { ListclienteComponent } from './view/cliente/listcliente/listcliente.component';
import { AddcooperativaComponent } from './view/cooperativa/addcooperativa/addcooperativa.component';
import { EditcooperativaComponent } from './view/cooperativa/editcooperativa/editcooperativa.component';
import { ListcooperativaComponent } from './view/cooperativa/listcooperativa/listcooperativa.component';
import { AdddescargueComponent } from './view/descargue/adddescargue/adddescargue.component';
import { EditdescargueComponent } from './view/descargue/editdescargue/editdescargue.component';
import { ListdescargueComponent } from './view/descargue/listdescargue/listdescargue.component';
import { AddgrupotrabajoComponent } from './view/grupotrabajo/addgrupotrabajo/addgrupotrabajo.component';
import { EditgrupotrabajoComponent } from './view/grupotrabajo/editgrupotrabajo/editgrupotrabajo.component';
import { ListgrupotrabajoComponent } from './view/grupotrabajo/listgrupotrabajo/listgrupotrabajo.component';
import { HomeComponent } from './view/home/home.component';
import { AddhornoComponent } from './view/horno/addhorno/addhorno.component';
import { EdithornoComponent } from './view/horno/edithorno/edithorno.component';
import { ListhornoComponent } from './view/horno/listhorno/listhorno.component';
import { AddladrilloComponent } from './view/ladrillo/addladrillo/addladrillo.component';
import { EditladrilloComponent } from './view/ladrillo/editladrillo/editladrillo.component';
import { ListladrilloComponent } from './view/ladrillo/listladrillo/listladrillo.component';
import { AddmoldeadoComponent } from './view/moldeado/addmoldeado/addmoldeado.component';
import { EditmoldeadoComponent } from './view/moldeado/editmoldeado/editmoldeado.component';
import { ListmoldeadoComponent } from './view/moldeado/listmoldeado/listmoldeado.component';
import { AddquemaComponent } from './view/quema/addquema/addquema.component';
import { EditquemaComponent } from './view/quema/editquema/editquema.component';
import { ListquemaComponent } from './view/quema/listquema/listquema.component';
import { AddquemacontrolComponent } from './view/quemacontrol/addquemacontrol/addquemacontrol.component';
import { EditquemacontrolComponent } from './view/quemacontrol/editquemacontrol/editquemacontrol.component';
import { ListquemacontrolComponent } from './view/quemacontrol/listquemacontrol/listquemacontrol.component';
import { AddrecepcionarcillaComponent } from './view/recepcionarcilla/addrecepcionarcilla/addrecepcionarcilla.component';
import { EditrecepcionarcillaComponent } from './view/recepcionarcilla/editrecepcionarcilla/editrecepcionarcilla.component';
import { ListrecepcionarcillaComponent } from './view/recepcionarcilla/listrecepcionarcilla/listrecepcionarcilla.component';
import { AddtipodepagoComponent } from './view/tipodepago/addtipodepago/addtipodepago.component';
import { EdittipodepagoComponent } from './view/tipodepago/edittipodepago/edittipodepago.component';
import { ListtipodepagoComponent } from './view/tipodepago/listtipodepago/listtipodepago.component';
import { AddtipotransporteComponent } from './view/tipotransporte/addtipotransporte/addtipotransporte.component';
import { EdittipotransporteComponent } from './view/tipotransporte/edittipotransporte/edittipotransporte.component';
import { ListtipotransporteComponent } from './view/tipotransporte/listtipotransporte/listtipotransporte.component';
import { AddtrabajadorComponent } from './view/trabajador/addtrabajador/addtrabajador.component';
import { EdittrabajadorComponent } from './view/trabajador/edittrabajador/edittrabajador.component';
import { ListtrabajadorComponent } from './view/trabajador/listtrabajador/listtrabajador.component';
import { AddtrabajadorgrupotrabajoComponent } from './view/trabajadorgrupotrabajo/addtrabajadorgrupotrabajo/addtrabajadorgrupotrabajo.component';
import { EdittrabajadorgrupotrabajoComponent } from './view/trabajadorgrupotrabajo/edittrabajadorgrupotrabajo/edittrabajadorgrupotrabajo.component';
import { ListtrabajadorgrupotrabajoComponent } from './view/trabajadorgrupotrabajo/listtrabajadorgrupotrabajo/listtrabajadorgrupotrabajo.component';
import { AddtransporteComponent } from './view/transporte/addtransporte/addtransporte.component';
import { EdittransporteComponent } from './view/transporte/edittransporte/edittransporte.component';
import { ListtransporteComponent } from './view/transporte/listtransporte/listtransporte.component';
import { AddubicacionComponent } from './view/ubicacion/addubicacion/addubicacion.component';
import { EditubicacionComponent } from './view/ubicacion/editubicacion/editubicacion.component';
import { ListubicacionComponent } from './view/ubicacion/listubicacion/listubicacion.component';

const routes: Routes = [
  {path:'addcooperativa',component:AddcooperativaComponent},
  {path:'editcooperativa',component:EditcooperativaComponent},
  {path:'listcooperativa',component:ListcooperativaComponent},
  {path:'addtipotransporte',component:AddtipotransporteComponent},
  {path:'edittipotransporte',component:EdittipotransporteComponent},
  {path:'listtipotransporte',component:ListtipotransporteComponent},
  {path:'addtransporte',component:AddtransporteComponent},
  {path:'edittransporte',component:EdittransporteComponent},
  {path:'listtransporte',component:ListtransporteComponent},
  {path:'addladrillo',component:AddladrilloComponent},
  {path:'editladrillo',component:EditladrilloComponent},
  {path:'listladrillo',component:ListladrilloComponent},
  {path:'addhorno',component:AddhornoComponent},
  {path:'edithorno',component:EdithornoComponent},
  {path:'listhorno',component:ListhornoComponent},
  {path:'addarcilla',component:AddarcillaComponent},
  {path:'editarcilla',component:EditarcillaComponent},
  {path:'listarcilla',component:ListarcillaComponent},
  {path:'addcliente',component:AddclienteComponent},
  {path:'editcliente',component:EditclienteComponent},
  {path:'listcliente',component:ListclienteComponent},
  {path:'addubicacion',component:AddubicacionComponent},
  {path:'editubicacion',component:EditubicacionComponent},
  {path:'listubicacion',component:ListubicacionComponent},
  {path:'addtrabajador',component:AddtrabajadorComponent},
  {path:'edittrabajador',component:EdittrabajadorComponent},
  {path:'listtrabajador',component:ListtrabajadorComponent},
  {path:'home',component:HomeComponent},
  {path:'addareatrabajo',component:AddareatrabajoComponent},
  {path:'editareatrabajo',component:EditareatrabajoComponent},
  {path:'listareatrabajo',component:ListareatrabajoComponent},
  {path:'addgrupotrabajo',component:AddgrupotrabajoComponent},
  {path:'editgrupotrabajo',component:EditgrupotrabajoComponent},
  {path:'listgrupotrabajo',component:ListgrupotrabajoComponent},
  {path:'addtrabajadorgrupotrabajo',component:AddtrabajadorgrupotrabajoComponent},
  {path:'edittrabajadorgrupotrabajo',component:EdittrabajadorgrupotrabajoComponent},
  {path:'listtrabajadorgrupotrabajo',component:ListtrabajadorgrupotrabajoComponent},
  {path:'addrecepcionarcilla',component:AddrecepcionarcillaComponent},
  {path:'editrecepcionarcilla',component:EditrecepcionarcillaComponent},
  {path:'listrecepcionarcilla',component:ListrecepcionarcillaComponent},
  {path:'addmoldeado',component:AddmoldeadoComponent},
  {path:'editmoldeado',component:EditmoldeadoComponent},
  {path:'listmoldeado',component:ListmoldeadoComponent},
  {path:'addcargue',component:AddcargueComponent},
  {path:'editcargue',component:EditcargueComponent},
  {path:'listcargue',component:ListcargueComponent},
  {path:'addquema',component:AddquemaComponent},
  {path:'editquema',component:EditquemaComponent},
  {path:'listquema',component:ListquemaComponent},
  {path:'addcontrolquema',component:AddquemacontrolComponent},
  {path:'editcontrolquema',component:EditquemacontrolComponent},
  {path:'listcontrolquema',component:ListquemacontrolComponent},
  {path:'adddescargue',component:AdddescargueComponent},
  {path:'editdescargue',component:EditdescargueComponent},
  {path:'listdescargue',component:ListdescargueComponent},
  {path:'addtipodepago',component:AddtipodepagoComponent},
  {path:'edittipodepago',component:EdittipodepagoComponent},
  {path:'listtipodepago',component:ListtipodepagoComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
