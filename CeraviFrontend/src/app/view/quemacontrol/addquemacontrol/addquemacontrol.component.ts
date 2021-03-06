import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Horno } from 'src/app/model/horno';
import { HornoService } from 'src/app/service/horno/horno.service';
import { QuemacontrolService } from 'src/app/service/quemacontrol/quemacontrol.service';
import { CreateQuemaControl } from 'src/app/model/quemacontrol';

@Component({
  selector: 'app-addquemacontrol',
  templateUrl: './addquemacontrol.component.html',
  styleUrls: ['./addquemacontrol.component.css']
})
export class AddquemacontrolComponent implements OnInit {

  constructor(private router:Router, private hornoservice:HornoService, private quemacontrolservice:QuemacontrolService ) { }

  quemacontrol = new CreateQuemaControl(0,new Date(),new Date(),0,"",new Date(),true);

  horno: Horno[] = [];

  ngOnInit(): void {
    this.getHorno();
  }

  getHorno(){
    this.hornoservice.getAllHorno()
    .subscribe(data=>{
      this.horno=data;
    });
  } 

  createQuemaControl(){

    var d = this.quemacontrol.tx_date.getDate();
    var m = this.quemacontrol.tx_date.getMonth()+1;
    var yy = this.quemacontrol.tx_date.getFullYear();
    var date = yy+"-"+m+"-"+d;
    this.quemacontrol.tx_date=date;

    var dd = this.quemacontrol.fechafin.getDate();
    var mm = this.quemacontrol.fechafin.getMonth()+1;
    var yyyy = this.quemacontrol.fechafin.getFullYear();
    var datefecha = yyyy+"-"+mm+"-"+dd;
    this.quemacontrol.fechafin=datefecha;

    var ddi = this.quemacontrol.fechainicio.getDate();
    var mmi = this.quemacontrol.fechainicio.getMonth()+1;
    var yyyyi = this.quemacontrol.fechainicio.getFullYear();
    var datefechainicio = yyyyi+"-"+mmi+"-"+ddi;
    this.quemacontrol.fechainicio=datefechainicio;
    


    const idhorno = this.quemacontrol.idhorno.toString();
    const idhor = idhorno.split('-');
    this.quemacontrol.idhorno=parseInt(idhor[0]);

    console.log(this.quemacontrol)
    
    this.quemacontrolservice.createControlQuema(this.quemacontrol)
    .subscribe(data=>{
      alert("Creación Exitosa");
      this.router.navigate(["listcontrolquema"]);
    });
    
  }

}
