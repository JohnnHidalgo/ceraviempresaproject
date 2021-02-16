import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddcooperativaComponent } from './view/cooperativa/addcooperativa/addcooperativa.component';
import { ListcooperativaComponent } from './view/cooperativa/listcooperativa/listcooperativa.component';
import { EditcooperativaComponent } from './view/cooperativa/editcooperativa/editcooperativa.component';
import { AddtipotransporteComponent } from './view/tipotransporte/addtipotransporte/addtipotransporte.component';
import { EdittipotransporteComponent } from './view/tipotransporte/edittipotransporte/edittipotransporte.component';
import { ListtipotransporteComponent } from './view/tipotransporte/listtipotransporte/listtipotransporte.component';
import { AddtransporteComponent } from './view/transporte/addtransporte/addtransporte.component';
import { EdittransporteComponent } from './view/transporte/edittransporte/edittransporte.component';
import { ListtransporteComponent } from './view/transporte/listtransporte/listtransporte.component';

@NgModule({
  declarations: [
    AppComponent,
    AddcooperativaComponent,
    ListcooperativaComponent,
    EditcooperativaComponent,
    AddtipotransporteComponent,
    EdittipotransporteComponent,
    ListtipotransporteComponent,
    AddtransporteComponent,
    EdittransporteComponent,
    ListtransporteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
