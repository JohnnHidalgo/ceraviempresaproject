import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddcooperativaComponent } from './view/cooperativa/addcooperativa/addcooperativa.component';
import { EditcooperativaComponent } from './view/cooperativa/editcooperativa/editcooperativa.component';
import { ListcooperativaComponent } from './view/cooperativa/listcooperativa/listcooperativa.component';

const routes: Routes = [
  {path:'addcooperativa',component:AddcooperativaComponent},
  {path:'editcooperativa',component:EditcooperativaComponent},
  {path:'listcooperativa',component:ListcooperativaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
