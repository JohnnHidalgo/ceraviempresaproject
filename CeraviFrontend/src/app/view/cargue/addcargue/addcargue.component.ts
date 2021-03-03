import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateCargue } from 'src/app/model/cargue';
import { GrupoTrabajoAllArea } from 'src/app/model/grupotrabajo';
import { Horno } from 'src/app/model/horno';
import { Ubicacion } from 'src/app/model/ubicacion';
import { CargueService } from 'src/app/service/cargue/cargue.service';
import { GrupotrabajoService } from 'src/app/service/grupotrabajo/grupotrabajo.service';
import { HornoService } from 'src/app/service/horno/horno.service';
import { UbicacionService } from 'src/app/service/ubicacion/ubicacion.service';

@Component({
  selector: 'app-addcargue',
  templateUrl: './addcargue.component.html',
  styleUrls: ['./addcargue.component.css']
})
export class AddcargueComponent implements OnInit {


  constructor(private router:Router, private grupotrabajoservice:GrupotrabajoService, private ubicacionservice:UbicacionService, private hornoservice:HornoService, private cargueservice:CargueService ) { }

  cargue = new CreateCargue(new Date(),0,"","",0,0,0,"",new Date(),true);

  grupotrabajo: GrupoTrabajoAllArea[] = [];
  ubicacion: Ubicacion[] = [];
  horno: Horno[] =[];

  ngOnInit(): void {
    this.getGrupoTrabajo();
    this.getUbicacion();
    this.getHorno();
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

  getHorno(){
    this.hornoservice.getAllHorno()
    .subscribe(data=>{
      this.horno=data;
    });
  } 

  createMoldeado(){

    var d = this.cargue.tx_date.getDate();
    var m = this.cargue.tx_date.getMonth()+1;
    var yy = this.cargue.tx_date.getFullYear();
    var date = yy+"-"+m+"-"+d;
    this.cargue.tx_date=date;

    var dd = this.cargue.fecha.getDate();
    var mm = this.cargue.fecha.getMonth()+1;
    var yyyy = this.cargue.fecha.getFullYear();
    var datefecha = yyyy+"-"+mm+"-"+dd;
    this.cargue.fecha=datefecha;

    
    const idgrupotrabajo = this.cargue.idgrupotrabajo.toString();
    const idgrupo = idgrupotrabajo.split('-');
    this.cargue.idgrupotrabajo=parseInt(idgrupo[0]);

    const idhorno = this.cargue.idhorno.toString();
    const idhor = idhorno.split('-');
    this.cargue.idhorno=parseInt(idhor[0]);

    const idubicaion = this.cargue.idubicacion.toString();
    const idubi = idubicaion.split('-');
    this.cargue.idubicacion=parseInt(idubi[0]);
    

    console.log(this.cargue)
    
    this.cargueservice.createCargue(this.cargue)
    .subscribe(data=>{
      alert("Creación Exitosa");
      this.router.navigate(["listcargue"]);
    });
    

    
  }

}
