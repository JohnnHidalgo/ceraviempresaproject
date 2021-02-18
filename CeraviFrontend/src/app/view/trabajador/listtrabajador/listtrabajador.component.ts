import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trabajador } from 'src/app/model/trabajador';
import { TrabajadorService } from 'src/app/service/trabajador/trabajador.service';

@Component({
  selector: 'app-listtrabajador',
  templateUrl: './listtrabajador.component.html',
  styleUrls: ['./listtrabajador.component.css']
})
export class ListtrabajadorComponent implements OnInit {


  constructor(private http: TrabajadorService, private router: Router) { }
  trabajadors: Trabajador[] = [];

  ngOnInit(): void {
    this.http.getAllTrabajador()
    .subscribe(data=>{
      this.trabajadors=data;
    });
  }

  goAddTrabajador(){
    this.router.navigate(["addtrabajador"])
  }

}
