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
    ListtransporteComponent
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
