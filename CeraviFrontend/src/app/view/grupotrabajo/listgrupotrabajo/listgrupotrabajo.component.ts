import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GrupoTrabajo, GrupoTrabajoAllArea } from 'src/app/model/grupotrabajo';
import { GrupotrabajoService } from 'src/app/service/grupotrabajo/grupotrabajo.service';

@Component({
  selector: 'app-listgrupotrabajo',
  templateUrl: './listgrupotrabajo.component.html',
  styleUrls: ['./listgrupotrabajo.component.css']
})
export class ListgrupotrabajoComponent implements OnInit {

  constructor(private http: GrupotrabajoService, private router: Router) { }
  grupoTrabajo: GrupoTrabajoAllArea[] = [];

  ngOnInit(): void {
    this.http.getAllTrabajoAllArea()
    .subscribe(data=>{
      this.grupoTrabajo=data;
    });
  }

  goAddGrupoTrabajo(){
    this.router.navigate(["addgrupotrabajo"])
  }

}