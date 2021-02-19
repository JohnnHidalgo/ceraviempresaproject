import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AreaTrabajo } from 'src/app/model/areatrabajo';
import { AreatrabajoService } from 'src/app/service/areatrabajo/areatrabajo.service';

@Component({
  selector: 'app-listareatrabajo',
  templateUrl: './listareatrabajo.component.html',
  styleUrls: ['./listareatrabajo.component.css']
})
export class ListareatrabajoComponent implements OnInit {

  constructor(private http: AreatrabajoService, private router: Router) { }
  areaTrabajos: AreaTrabajo[] = [];

  ngOnInit(): void {
    this.http.getAllAreaTrabajo()
    .subscribe(data=>{
      this.areaTrabajos=data;
    });
  }

  goAddAreaTrabajo(){
    this.router.navigate(["addareatrabajo"])
  }
}
