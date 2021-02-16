import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateCooperativa } from 'src/app/model/cooperativa';
import { CooperativaService } from 'src/app/service/Cooperativa/cooperativa.service';

@Component({
  selector: 'app-addcooperativa',
  templateUrl: './addcooperativa.component.html',
  styleUrls: ['./addcooperativa.component.css']
})
export class AddcooperativaComponent implements OnInit {

  constructor(private router:Router, private service:CooperativaService) { }

  ngOnInit() {
  }

  cooperativa = new CreateCooperativa("","",new Date,true);

  
  createCooperativa(){
    this.service.createCooperativa(this.cooperativa)
    .subscribe(data=>{
      alert("Creación Exitosa");
      this.router.navigate(["listcooperativa"]);
    })
  }



}
