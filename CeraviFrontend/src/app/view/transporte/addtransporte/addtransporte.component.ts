import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cooperativa } from 'src/app/model/cooperativa';
import { TipoTransporte } from 'src/app/model/tipotransporte';
import { CreateTransporte } from 'src/app/model/transporte';
import { CooperativaService } from 'src/app/service/cooperativa/cooperativa.service';
import { TipotransporteService } from 'src/app/service/tipotransporte/tipotransporte.service';
import { TransporteService } from 'src/app/service/transporte/transporte.service';

@Component({
  selector: 'app-addtransporte',
  templateUrl: './addtransporte.component.html',
  styleUrls: ['./addtransporte.component.css']
})
export class AddtransporteComponent implements OnInit {


  constructor(private router:Router, private service:TransporteService, private tipotransporteservice:TipotransporteService, private cooperativaservice:CooperativaService) { }

  transporte = new CreateTransporte("","","",1,1,"",new Date(),true);
  tipotransporte: TipoTransporte[]=[];
  cooperativa: Cooperativa[]=[];

  getAllTipoTransporte(){
    this.tipotransporteservice.getAllTipoTransporte()
    .subscribe(data=>{
      this.tipotransporte=data;
    })
  }

  getAllCooperativa(){
    this.cooperativaservice.getAllCooperativa()
    .subscribe(data=>{
      this.cooperativa=data;
    })
  }


  createTransporte(){
    var dd = this.transporte.tx_date.getDate();
    var mm = this.transporte.tx_date.getMonth()+1;
    var yyyy = this.transporte.tx_date.getFullYear();
    var date = yyyy+"-"+mm+"-"+dd;
    this.transporte.tx_date=date;

    this.service.createTransporte(this.transporte)
    .subscribe(data=>{
      alert("Creación Exitosa");
      this.router.navigate(["listtransporte"]);
    })
  }

  ngOnInit(): void {
    this.getAllCooperativa();
    this.getAllTipoTransporte();
  }
}