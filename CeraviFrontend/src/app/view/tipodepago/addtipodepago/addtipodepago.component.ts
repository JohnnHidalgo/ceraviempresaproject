import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateTipoDePago } from 'src/app/model/tipodepago';
import { TipodepagoService } from 'src/app/service/tipodepago/tipodepago.service';

@Component({
  selector: 'app-addtipodepago',
  templateUrl: './addtipodepago.component.html',
  styleUrls: ['./addtipodepago.component.css']
})
export class AddtipodepagoComponent implements OnInit {

  constructor(private router:Router, private service:TipodepagoService) { }
  
  tipodepago = new CreateTipoDePago("","",new Date,true);

  
  createTipodePago(){
    var dd = this.tipodepago.tx_date.getDate();
    var mm = this.tipodepago.tx_date.getMonth()+1;
    var yyyy = this.tipodepago.tx_date.getFullYear();
    var date = yyyy+"-"+mm+"-"+dd;
    this.tipodepago.tx_date=date;

    this.service.createTipoDePago(this.tipodepago)
    .subscribe(data=>{
      alert("Creación Exitosa");
      this.router.navigate(["listtipodepago"]);
    })
  }
ngOnInit(): void {
}

}
