import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GrupoTrabajoAllArea } from 'src/app/model/grupotrabajo';
import { Horno } from 'src/app/model/horno';
import { CreateQuema } from 'src/app/model/quema';
import { GrupotrabajoService } from 'src/app/service/grupotrabajo/grupotrabajo.service';
import { HornoService } from 'src/app/service/horno/horno.service';
import { QuemaService } from 'src/app/service/quema/quema.service';

@Component({
  selector: 'app-addquema',
  templateUrl: './addquema.component.html',
  styleUrls: ['./addquema.component.css']
})
export class AddquemaComponent implements OnInit {

  constructor(private router:Router, private grupotrabajoservice:GrupotrabajoService, private quemaservice: QuemaService, private hornoservice:HornoService ) { }

  quema = new CreateQuema(new Date(),0,"","",0,"",new Date(),true);

  grupotrabajo: GrupoTrabajoAllArea[] = [];
  horno: Horno[] = [];

  ngOnInit(): void {
    this.getGrupoTrabajo();
    this.getHorno();
  }

  getGrupoTrabajo(){
    this.grupotrabajoservice.getAllTrabajoAllArea()
    .subscribe(data=>{
      this.grupotrabajo=data;
    }); 
  } 

  getHorno(){
    this.hornoservice.getAllHorno()
    .subscribe(data=>{
      this.horno=data;
    });
  } 

  createMoldeado(){

    var d = this.quema.tx_date.getDate();
    var m = this.quema.tx_date.getMonth()+1;
    var yy = this.quema.tx_date.getFullYear();
    var date = yy+"-"+m+"-"+d;
    this.quema.tx_date=date;

    var dd = this.quema.fecha.getDate();
    var mm = this.quema.fecha.getMonth()+1;
    var yyyy = this.quema.fecha.getFullYear();
    var datefecha = yyyy+"-"+mm+"-"+dd;
    this.quema.fecha=datefecha;
    
    const idgrupotrabajo = this.quema.idgrupotrabajo.toString();
    const idgrupo = idgrupotrabajo.split('-');
    this.quema.idgrupotrabajo=parseInt(idgrupo[0]);

    const idhorno = this.quema.idhorno.toString();
    const idhor = idhorno.split('-');
    this.quema.idhorno=parseInt(idhor[0]);

    console.log(this.quema)
    
    this.quemaservice.createQuema(this.quema)
    .subscribe(data=>{
      alert("Creación Exitosa");
      this.router.navigate(["listquema"]);
    });
    
  }
}
