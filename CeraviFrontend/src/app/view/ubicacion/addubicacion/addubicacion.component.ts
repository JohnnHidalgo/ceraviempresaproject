import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateUbicacion } from 'src/app/model/ubicacion';
import { UbicacionService } from 'src/app/service/ubicacion/ubicacion.service';

@Component({
  selector: 'app-addubicacion',
  templateUrl: './addubicacion.component.html',
  styleUrls: ['./addubicacion.component.css']
})
export class AddubicacionComponent implements OnInit {

  constructor(private router:Router, private service:UbicacionService) { }

  ubicacion = new CreateUbicacion("","",new Date,true);

  
  createUbicacion(){
    var dd = this.ubicacion.tx_date.getDate();
    var mm = this.ubicacion.tx_date.getMonth()+1;
    var yyyy = this.ubicacion.tx_date.getFullYear();
    var date = yyyy+"-"+mm+"-"+dd;
    this.ubicacion.tx_date=date;

    this.service.createUbicacion(this.ubicacion)
    .subscribe(data=>{
      alert("Creación Exitosa");
      this.router.navigate(["listubicacion"]);
    })
  }

  ngOnInit(): void {
  }

}
