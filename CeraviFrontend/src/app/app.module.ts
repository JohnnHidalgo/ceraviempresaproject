import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddcooperativaComponent } from './view/cooperativa/addcooperativa/addcooperativa.component';
import { EditcooperativaComponent } from './view/cooperativa/editcooperativa/editcooperativa.component';
import { ListcooperativaComponent } from './view/cooperativa/listcooperativa/listcooperativa.component';
import { ListtipotransporteComponent } from './view/tipotransporte/listtipotransporte/listtipotransporte.component';
import { AddtipotransporteComponent } from './view/tipotransporte/addtipotransporte/addtipotransporte.component';
import { EdittipotransporteComponent } from './view/tipotransporte/edittipotransporte/edittipotransporte.component';
import { EdittransporteComponent } from './view/transporte/edittransporte/edittransporte.component';
import { AddtransporteComponent } from './view/transporte/addtransporte/addtransporte.component';
import { ListtransporteComponent } from './view/transporte/listtransporte/listtransporte.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AddladrilloComponent } from './view/ladrillo/addladrillo/addladrillo.component';
import { ListladrilloComponent } from './view/ladrillo/listladrillo/listladrillo.component';
import { EditladrilloComponent } from './view/ladrillo/editladrillo/editladrillo.component';
import { AddhornoComponent } from './view/horno/addhorno/addhorno.component';
import { ListhornoComponent } from './view/horno/listhorno/listhorno.component';
import { EdithornoComponent } from './view/horno/edithorno/edithorno.component';
import { AddarcillaComponent } from './view/arcilla/addarcilla/addarcilla.component';
import { ListarcillaComponent } from './view/arcilla/listarcilla/listarcilla.component';
import { EditarcillaComponent } from './view/arcilla/editarcilla/editarcilla.component';
import { AddclienteComponent } from './view/cliente/addcliente/addcliente.component';
import { ListclienteComponent } from './view/cliente/listcliente/listcliente.component';
import { EditclienteComponent } from './view/cliente/editcliente/editcliente.component';
import { AddubicacionComponent } from './view/ubicacion/addubicacion/addubicacion.component';
import { ListubicacionComponent } from './view/ubicacion/listubicacion/listubicacion.component';
import { EditubicacionComponent } from './view/ubicacion/editubicacion/editubicacion.component';
import { AddtrabajadorComponent } from './view/trabajador/addtrabajador/addtrabajador.component';
import { EdittrabajadorComponent } from './view/trabajador/edittrabajador/edittrabajador.component';
import { ListtrabajadorComponent } from './view/trabajador/listtrabajador/listtrabajador.component';
import { HomeComponent } from './view/home/home.component';
import { AddareatrabajoComponent } from './view/areatrabajo/addareatrabajo/addareatrabajo.component';
import { EditareatrabajoComponent } from './view/areatrabajo/editareatrabajo/editareatrabajo.component';
import { ListareatrabajoComponent } from './view/areatrabajo/listareatrabajo/listareatrabajo.component';
import { AddgrupotrabajoComponent } from './view/grupotrabajo/addgrupotrabajo/addgrupotrabajo.component';
import { EditgrupotrabajoComponent } from './view/grupotrabajo/editgrupotrabajo/editgrupotrabajo.component';
import { ListgrupotrabajoComponent } from './view/grupotrabajo/listgrupotrabajo/listgrupotrabajo.component';
import { AddtrabajadorgrupotrabajoComponent } from './view/trabajadorgrupotrabajo/addtrabajadorgrupotrabajo/addtrabajadorgrupotrabajo.component';
import { ListtrabajadorgrupotrabajoComponent } from './view/trabajadorgrupotrabajo/listtrabajadorgrupotrabajo/listtrabajadorgrupotrabajo.component';
import { EdittrabajadorgrupotrabajoComponent } from './view/trabajadorgrupotrabajo/edittrabajadorgrupotrabajo/edittrabajadorgrupotrabajo.component';
import { AddrecepcionarcillaComponent } from './view/recepcionarcilla/addrecepcionarcilla/addrecepcionarcilla.component';
import { ListrecepcionarcillaComponent } from './view/recepcionarcilla/listrecepcionarcilla/listrecepcionarcilla.component';
import { EditrecepcionarcillaComponent } from './view/recepcionarcilla/editrecepcionarcilla/editrecepcionarcilla.component';
import { AddmoldeadoComponent } from './view/moldeado/addmoldeado/addmoldeado.component';
import { ListmoldeadoComponent } from './view/moldeado/listmoldeado/listmoldeado.component';
import { EditmoldeadoComponent } from './view/moldeado/editmoldeado/editmoldeado.component';
import { AddcargueComponent } from './view/cargue/addcargue/addcargue.component';
import { ListcargueComponent } from './view/cargue/listcargue/listcargue.component';
import { EditcargueComponent } from './view/cargue/editcargue/editcargue.component';
import { AddquemaComponent } from './view/quema/addquema/addquema.component';
import { EditquemaComponent } from './view/quema/editquema/editquema.component';
import { ListquemaComponent } from './view/quema/listquema/listquema.component';
import { AddquemacontrolComponent } from './view/quemacontrol/addquemacontrol/addquemacontrol.component';
import { EditquemacontrolComponent } from './view/quemacontrol/editquemacontrol/editquemacontrol.component';
import { ListquemacontrolComponent } from './view/quemacontrol/listquemacontrol/listquemacontrol.component';
import { AdddescargueComponent } from './view/descargue/adddescargue/adddescargue.component';
import { EditdescargueComponent } from './view/descargue/editdescargue/editdescargue.component';
import { ListdescargueComponent } from './view/descargue/listdescargue/listdescargue.component';
import { AddtipodepagoComponent } from './view/tipodepago/addtipodepago/addtipodepago.component';
import { EdittipodepagoComponent } from './view/tipodepago/edittipodepago/edittipodepago.component';
import { ListtipodepagoComponent } from './view/tipodepago/listtipodepago/listtipodepago.component';

@NgModule({
  declarations: [
    AppComponent,
    AddcooperativaComponent,
    EditcooperativaComponent,
    ListcooperativaComponent,
    ListtipotransporteComponent,
    AddtipotransporteComponent,
    EdittipotransporteComponent,
    EdittransporteComponent,
    AddtransporteComponent,
    ListtransporteComponent,
    AddladrilloComponent,
    ListladrilloComponent,
    EditladrilloComponent,
    AddhornoComponent,
    ListhornoComponent,
    EdithornoComponent,
    AddarcillaComponent,
    ListarcillaComponent,
    EditarcillaComponent,
    AddclienteComponent,
    ListclienteComponent,
    EditclienteComponent,
    AddubicacionComponent,
    ListubicacionComponent,
    EditubicacionComponent,
    AddtrabajadorComponent,
    EdittrabajadorComponent,
    ListtrabajadorComponent,
    HomeComponent,
    AddareatrabajoComponent,
    EditareatrabajoComponent,
    ListareatrabajoComponent,
    AddgrupotrabajoComponent,
    EditgrupotrabajoComponent,
    ListgrupotrabajoComponent,
    AddtrabajadorgrupotrabajoComponent,
    ListtrabajadorgrupotrabajoComponent,
    EdittrabajadorgrupotrabajoComponent,
    AddrecepcionarcillaComponent,
    ListrecepcionarcillaComponent,
    EditrecepcionarcillaComponent,
    AddmoldeadoComponent,
    ListmoldeadoComponent,
    EditmoldeadoComponent,
    AddcargueComponent,
    ListcargueComponent,
    EditcargueComponent,
    AddquemaComponent,
    EditquemaComponent,
    ListquemaComponent,
    AddquemacontrolComponent,
    EditquemacontrolComponent,
    ListquemacontrolComponent,
    AdddescargueComponent,
    EditdescargueComponent,
    ListdescargueComponent,
    AddtipodepagoComponent,
    EdittipodepagoComponent,
    ListtipodepagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
