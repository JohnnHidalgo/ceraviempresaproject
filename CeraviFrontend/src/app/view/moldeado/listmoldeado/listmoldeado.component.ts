import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Moldeado, MoldeadoAllData } from 'src/app/model/moldeado';
import { MoldeadoService } from 'src/app/service/moldeado/moldeado.service';

@Component({
  selector: 'app-listmoldeado',
  templateUrl: './listmoldeado.component.html',
  styleUrls: ['./listmoldeado.component.css']
})
export class ListmoldeadoComponent implements OnInit {

  constructor(private http: MoldeadoService, private router: Router) { }
  
  moldeado: MoldeadoAllData[] = [];
  
  ngOnInit(): void {
    this.http.getAllMoldeadoAllData()
    .subscribe(data=>{
      this.moldeado=data;
      console.log(this.moldeado)
    });
  }
}
