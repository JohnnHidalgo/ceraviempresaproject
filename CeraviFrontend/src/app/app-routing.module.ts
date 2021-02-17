import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcooperativaComponent } from './view/cooperativa/addcooperativa/addcooperativa.component';
import { EditcooperativaComponent } from './view/cooperativa/editcooperativa/editcooperativa.component';
import { ListcooperativaComponent } from './view/cooperativa/listcooperativa/listcooperativa.component';
import { AddtipotransporteComponent } from './view/tipotransporte/addtipotransporte/addtipotransporte.component';
import { EdittipotransporteComponent } from './view/tipotransporte/edittipotransporte/edittipotransporte.component';
import { ListtipotransporteComponent } from './view/tipotransporte/listtipotransporte/listtipotransporte.component';
import { AddtransporteComponent } from './view/transporte/addtransporte/addtransporte.component';
import { EdittransporteComponent } from './view/transporte/edittransporte/edittransporte.component';
import { ListtransporteComponent } from './view/transporte/listtransporte/listtransporte.component';

const routes: Routes = [
  {path:'addcooperativa',component:AddcooperativaComponent},
  {path:'editcooperativa',component:EditcooperativaComponent},
  {path:'listcooperativa',component:ListcooperativaComponent},

  {path:'addtipotransporte',component:AddtipotransporteComponent},
  {path:'edittipotransporte',component:EdittipotransporteComponent},
  {path:'listtipotransporte',component:ListcooperativaComponent},

  {path:'addtransporte',component:AddtransporteComponent},
  {path:'edittransporte',component:EdittransporteComponent},
  {path:'listtransporte',component:ListtransporteComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
