import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GrupotrabajoService } from 'src/app/service/grupotrabajo/grupotrabajo.service';
import { GrupoTrabajoAllTrabajador } from 'src/app/model/grupotrabajo';

@Component({
  selector: 'app-listtrabajadorgrupotrabajo',
  templateUrl: './listtrabajadorgrupotrabajo.component.html',
  styleUrls: ['./listtrabajadorgrupotrabajo.component.css']
})
export class ListtrabajadorgrupotrabajoComponent implements OnInit {


  constructor(private http: GrupotrabajoService, private router: Router) { }
  grupoTrabajadores: GrupoTrabajoAllTrabajador[] = [];
  idgrupotrabajo = localStorage.getItem("idgrupotrabajo")||"{}";
  ngOnInit(): void {
    this.http.getGrupoTrabajosAllTrabajadores(parseInt(this.idgrupotrabajo))
    .subscribe(data=>{
      this.grupoTrabajadores=data;
    });
  }


  goAddTrabajadorGrupoTrabajo(){
    this.router.navigate(["addtrabajadorgrupotrabajo"])
  }


}
