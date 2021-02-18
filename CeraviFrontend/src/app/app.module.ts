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
    EdithornoComponent
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
