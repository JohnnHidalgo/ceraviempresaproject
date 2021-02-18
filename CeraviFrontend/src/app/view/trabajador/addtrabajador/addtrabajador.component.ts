import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateTrabajador } from 'src/app/model/trabajador';
import { TrabajadorService } from 'src/app/service/trabajador/trabajador.service';

@Component({
  selector: 'app-addtrabajador',
  templateUrl: './addtrabajador.component.html',
  styleUrls: ['./addtrabajador.component.css']
})
export class AddtrabajadorComponent implements OnInit {

  constructor(private router:Router, private service:TrabajadorService) { }

  trabajador = new CreateTrabajador("","","",new Date(),true);

  
  createTrabajador(){
    var dd = this.trabajador.tx_date.getDate();
    var mm = this.trabajador.tx_date.getMonth()+1;
    var yyyy = this.trabajador.tx_date.getFullYear();
    var date = yyyy+"-"+mm+"-"+dd;
    this.trabajador.tx_date=date;

    this.service.createTrabajador(this.trabajador)
    .subscribe(data=>{
      alert("Creación Exitosa");
      this.router.navigate(["listtrabajador"]);
    })
  }

  ngOnInit(): void {
  }

}