import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateTipoTransporte } from 'src/app/model/tipotransporte';
import { TipotransporteService } from 'src/app/service/tipotransporte/tipotransporte.service';

@Component({
  selector: 'app-addtipotransporte',
  templateUrl: './addtipotransporte.component.html',
  styleUrls: ['./addtipotransporte.component.css']
})
export class AddtipotransporteComponent implements OnInit {


    constructor(private router:Router, private service:TipotransporteService) { }
  
    tipotransporte = new CreateTipoTransporte("","",new Date,true);
  
    
    createCooperativa(){
      var dd = this.tipotransporte.tx_date.getDate();
      var mm = this.tipotransporte.tx_date.getMonth()+1;
      var yyyy = this.tipotransporte.tx_date.getFullYear();
      var date = yyyy+"-"+mm+"-"+dd;
      this.tipotransporte.tx_date=date;
  
      this.service.createTipoTransporte(this.tipotransporte)
      .subscribe(data=>{
        alert("Creación Exitosa");
        this.router.navigate(["listtipotransporte"]);
      })
    }
  ngOnInit(): void {
  }

}
