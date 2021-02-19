import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateAreaTrabajo } from 'src/app/model/areatrabajo';
import { AreatrabajoService } from 'src/app/service/areatrabajo/areatrabajo.service';

@Component({
  selector: 'app-addareatrabajo',
  templateUrl: './addareatrabajo.component.html',
  styleUrls: ['./addareatrabajo.component.css']
})
export class AddareatrabajoComponent implements OnInit {


  constructor(private router:Router, private service:AreatrabajoService) { }

  areaTrabajo = new CreateAreaTrabajo("","",new Date,true);

  
  createAreaTrabajo(){
    var dd = this.areaTrabajo.tx_date.getDate();
    var mm = this.areaTrabajo.tx_date.getMonth()+1;
    var yyyy = this.areaTrabajo.tx_date.getFullYear();
    var date = yyyy+"-"+mm+"-"+dd;
    this.areaTrabajo.tx_date=date;

    this.service.createAreaTrabajo(this.areaTrabajo)
    .subscribe(data=>{
      alert("Creación Exitosa");
      this.router.navigate(["listareatrabajo"]);
    })
  }
  ngOnInit(): void {
  }

}
