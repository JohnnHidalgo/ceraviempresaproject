import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateCooperativa } from 'src/app/model/cooperativa';
import { CooperativaService } from 'src/app/service/cooperativa/cooperativa.service';

@Component({
  selector: 'app-addcooperativa',
  templateUrl: './addcooperativa.component.html',
  styleUrls: ['./addcooperativa.component.css']
})
export class AddcooperativaComponent implements OnInit {

  constructor(private router:Router, private service:CooperativaService) { }

  cooperativa = new CreateCooperativa("","",new Date,true);

  
  createCooperativa(){
    var dd = this.cooperativa.tx_date.getDate();
    var mm = this.cooperativa.tx_date.getMonth()+1;
    var yyyy = this.cooperativa.tx_date.getFullYear();
    var date = yyyy+"-"+mm+"-"+dd;
    this.cooperativa.tx_date=date;

    this.service.createCooperativa(this.cooperativa)
    .subscribe(data=>{
      alert("Creación Exitosa");
      this.router.navigate(["listcooperativa"]);
    })
  }
  ngOnInit(): void {
  }



}
