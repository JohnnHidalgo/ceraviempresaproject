import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CargueAllData } from 'src/app/model/cargue';
import { CargueService } from 'src/app/service/cargue/cargue.service';

@Component({
  selector: 'app-listcargue',
  templateUrl: './listcargue.component.html',
  styleUrls: ['./listcargue.component.css']
})
export class ListcargueComponent implements OnInit {

  constructor(private http: CargueService, private router: Router) { }
  
  cargue: CargueAllData[] = [];
  
  ngOnInit(): void {
    this.http.getAllCargueAllData()
    .subscribe(data=>{
      this.cargue=data;
    });
  }

}


/*
Agregar correcciones, temario, etc
Correcciones para este jueves
*/