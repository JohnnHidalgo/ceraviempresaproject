import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GrupoTrabajoAllArea } from 'src/app/model/grupotrabajo';
import { Trabajador } from 'src/app/model/trabajador';
import { CreateTrabajadorGrupoTrabajo } from 'src/app/model/trabajadorgrupotrabajo';
import { GrupotrabajoService } from 'src/app/service/grupotrabajo/grupotrabajo.service';
import { TrabajadorService } from 'src/app/service/trabajador/trabajador.service';
import { TrabajadorgrupotrabajoService } from 'src/app/service/trabajadorgrupotrabajo/trabajadorgrupotrabajo.service';

@Component({
  selector: 'app-addtrabajadorgrupotrabajo',
  templateUrl: './addtrabajadorgrupotrabajo.component.html',
  styleUrls: ['./addtrabajadorgrupotrabajo.component.css']
})
export class AddtrabajadorgrupotrabajoComponent implements OnInit {

  constructor(private router:Router, private trabajogrupotrabajoservice:TrabajadorgrupotrabajoService, private trabajadorservice: TrabajadorService, private grupotrabajoservice: GrupotrabajoService) { }
  trabajadorList: Trabajador[]=[];
  grupoList: GrupoTrabajoAllArea[]=[];
  idlist = new Array();

  trabajadorGrupoTrabajador = new CreateTrabajadorGrupoTrabajo(0,0,'',new Date(),true);

  ngOnInit(): void {
    this.getAllTrabajadores();
    this.getAllGrupos();
  }

  getAllTrabajadores(){
    this.trabajadorservice.getAllTrabajador()
    .subscribe(data=>{
      this.trabajadorList=data;
    })
  }

  getAllGrupos(){
    this.grupotrabajoservice.getAllTrabajoAllArea()
    .subscribe(data=>{
      this.grupoList=data;
    })
  }

  agregarTrabajador(){
    const name = this.trabajadorGrupoTrabajador.idtrabajador.toString();
    const idtrabajador = name.split('-');
    this.idlist.push(idtrabajador);
  } 

  deleteTrabajador(idlis:any){
    for( var i = 0; i < this.idlist.length; i++){ 
        if ( this.idlist[i] === idlis) { 
          this.idlist.splice(i, 1); 
        }
    }
  }

  createGrupoTrabajo(){
    console.log(this.trabajadorGrupoTrabajador)
    console.log(this.idlist)
  }

  createTrabajadorGrupoTrabajo(){
    var d = this.trabajadorGrupoTrabajador.tx_date.getDate();
    var m = this.trabajadorGrupoTrabajador.tx_date.getMonth()+1;
    var yy = this.trabajadorGrupoTrabajador.tx_date.getFullYear();
    var date = yy+"-"+m+"-"+d;
    this.trabajadorGrupoTrabajador.tx_date=date;


    const grupo = this.trabajadorGrupoTrabajador.idgrupotrabajo.toString();
    const idgrupo = grupo.split('-');
    this.trabajadorGrupoTrabajador.idgrupotrabajo=parseInt(idgrupo[0]);


    for( var i = 0; i < this.idlist.length; i++){ 
      this.trabajadorGrupoTrabajador.idtrabajador=this.idlist[i][0];
      console.log(this.trabajadorGrupoTrabajador)
      this.trabajogrupotrabajoservice.createTrabajadorGrupoTrabajo(this.trabajadorGrupoTrabajador)
      .subscribe(data=>{
      })    
    }
    
    alert("Creación Exitosa");
    this.router.navigate(["salelist"]);

  }

}