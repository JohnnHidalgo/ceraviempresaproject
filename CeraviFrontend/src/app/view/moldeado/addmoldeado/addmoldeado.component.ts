import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GrupoTrabajoAllArea } from 'src/app/model/grupotrabajo';
import { Ladrillo } from 'src/app/model/ladrillo';
import { CreateMoldeado } from 'src/app/model/moldeado';
import { TrabajadorGrupoTrabajo } from 'src/app/model/trabajadorgrupotrabajo';
import { Ubicacion } from 'src/app/model/ubicacion';
import { GrupotrabajoService } from 'src/app/service/grupotrabajo/grupotrabajo.service';
import { LadrilloService } from 'src/app/service/ladrillo/ladrillo.service';
import { MoldeadoService } from 'src/app/service/moldeado/moldeado.service';
import { TrabajadorgrupotrabajoService } from 'src/app/service/trabajadorgrupotrabajo/trabajadorgrupotrabajo.service';
import { UbicacionService } from 'src/app/service/ubicacion/ubicacion.service';

@Component({
  selector: 'app-addmoldeado',
  templateUrl: './addmoldeado.component.html',
  styleUrls: ['./addmoldeado.component.css']
})
export class AddmoldeadoComponent implements OnInit {

  constructor(private router:Router, private grupotrabajoservice:GrupotrabajoService, private ubicacionservice:UbicacionService, private ladrilloservice: LadrilloService, private moldeadoservice: MoldeadoService ) { }

  moldeado = new CreateMoldeado(new Date(),0,0,0,0,"",new Date(),true);

  grupotrabajo: GrupoTrabajoAllArea[] = [];
  ubicacion: Ubicacion[] = [];
  ladrillo: Ladrillo[] =[];

  ngOnInit(): void {
    this.getGrupoTrabajo();
    this.getUbicacion();
    this.getLadrillo();
  }

  getGrupoTrabajo(){
    this.grupotrabajoservice.getAllTrabajoAllArea()
    .subscribe(data=>{
      this.grupotrabajo=data;
    }); 
  } 

  getUbicacion(){
    this.ubicacionservice.getAllUbicacion()
    .subscribe(data=>{
      this.ubicacion=data;
    });
  } 

  getLadrillo(){
    this.ladrilloservice.getAllLadrillo()
    .subscribe(data=>{
      this.ladrillo=data;
    });
  } 

  createMoldeado(){

    var d = this.moldeado.tx_date.getDate();
    var m = this.moldeado.tx_date.getMonth()+1;
    var yy = this.moldeado.tx_date.getFullYear();
    var date = yy+"-"+m+"-"+d;
    this.moldeado.tx_date=date;

    var dd = this.moldeado.fecha.getDate();
    var mm = this.moldeado.fecha.getMonth()+1;
    var yyyy = this.moldeado.fecha.getFullYear();
    var datefecha = yyyy+"-"+mm+"-"+dd;
    this.moldeado.fecha=datefecha;

    
    const idgrupotrabajo = this.moldeado.idgrupotrabajo.toString();
    const idgrupo = idgrupotrabajo.split('-');
    this.moldeado.idgrupotrabajo=parseInt(idgrupo[0]);

    const idladrillo = this.moldeado.idladrillo.toString();
    const idlad = idladrillo.split('-');
    this.moldeado.idladrillo=parseInt(idlad[0]);

    const idubicaion = this.moldeado.idubicacion.toString();
    const idubi = idubicaion.split('-');
    this.moldeado.idubicacion=parseInt(idubi[0]);
    

    this.moldeadoservice.createMoldeado(this.moldeado)
    .subscribe(data=>{
      alert("Creación Exitosa");
      this.router.navigate(["listmoldeado"]);
    });
  }
  
}
