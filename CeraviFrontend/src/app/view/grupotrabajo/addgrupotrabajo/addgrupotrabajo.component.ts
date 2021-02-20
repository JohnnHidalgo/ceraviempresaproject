import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AreaTrabajo } from 'src/app/model/areatrabajo';
import { CreateGrupoTrabajo } from 'src/app/model/grupotrabajo';
import { AreatrabajoService } from 'src/app/service/areatrabajo/areatrabajo.service';
import { GrupotrabajoService } from 'src/app/service/grupotrabajo/grupotrabajo.service';

@Component({
  selector: 'app-addgrupotrabajo',
  templateUrl: './addgrupotrabajo.component.html',
  styleUrls: ['./addgrupotrabajo.component.css']
})
export class AddgrupotrabajoComponent implements OnInit {

  constructor(private router:Router, private service:GrupotrabajoService, private areatrabajoservice:AreatrabajoService) { }

  grupotrabajo = new CreateGrupoTrabajo(1,"","",new Date(),true);
  areaTrabajos: AreaTrabajo[]=[];

  ngOnInit(): void {
    this.getAllAreaTrabajo();
  }

  getAllAreaTrabajo(){
    this.areatrabajoservice.getAllAreaTrabajo()
    .subscribe(data=>{
      this.areaTrabajos=data;
    })
  }

  createGrupoTrabajo(){
    var dd = this.grupotrabajo.tx_date.getDate();
    var mm = this.grupotrabajo.tx_date.getMonth()+1;
    var yyyy = this.grupotrabajo.tx_date.getFullYear();
    var date = yyyy+"-"+mm+"-"+dd;
    this.grupotrabajo.tx_date=date;

    this.getIdArea();
    this.service.createGrupoTrabajo(this.grupotrabajo)
    .subscribe(data=>{
      alert("Creación Exitosa");
      this.router.navigate(["listgrupotrabajo"]);
    })
  }



  getIdArea(){
    
    var res = this.grupotrabajo.idareatrabajo.toString().split("-");
    this.grupotrabajo.idareatrabajo=parseInt(res[0]);
    
    

  }


}