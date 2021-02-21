import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Arcilla } from 'src/app/model/arcilla';
import { CreateRecepcionarcilla } from 'src/app/model/recepcionarcilla';
import { TransporteAllData } from 'src/app/model/transporte';
import { ArcillaService } from 'src/app/service/arcilla/arcilla.service';
import { RecepcionarcillaService } from 'src/app/service/recepcionarcilla/recepcionarcilla.service';
import { TransporteService } from 'src/app/service/transporte/transporte.service';

@Component({
  selector: 'app-addrecepcionarcilla',
  templateUrl: './addrecepcionarcilla.component.html',
  styleUrls: ['./addrecepcionarcilla.component.css']
})
export class AddrecepcionarcillaComponent implements OnInit {

  constructor(private router:Router, private recepcionarcillaservice:RecepcionarcillaService, private transporteservice:TransporteService, private arcillaservice: ArcillaService) { }

  recepcionArcilla = new CreateRecepcionarcilla(new Date(),0,0,0,"",new Date(),true);

  arcillas: Arcilla[] = [];
  transportes: TransporteAllData[] = [];

  ngOnInit(): void {
    this.getArcilla();
    this.getTransporte();

  }

  getArcilla(){
    this.arcillaservice.getAllArcilla()
    .subscribe(data=>{
      this.arcillas=data;
    }); 
  } 

  getTransporte(){
    this.transporteservice.getAllTransporteAllData()
    .subscribe(data=>{
      this.transportes=data;
    });
  } 

  createRecepcionArcilla(){
    console.log(this.recepcionArcilla)

    var d = this.recepcionArcilla.tx_date.getDate();
    var m = this.recepcionArcilla.tx_date.getMonth()+1;
    var yy = this.recepcionArcilla.tx_date.getFullYear();
    var date = yy+"-"+m+"-"+d;
    this.recepcionArcilla.tx_date=date;

    var dd = this.recepcionArcilla.fecha.getDate();
    var mm = this.recepcionArcilla.fecha.getMonth()+1;
    var yyyy = this.recepcionArcilla.fecha.getFullYear();
    var datefecha = yyyy+"-"+mm+"-"+dd;
    this.recepcionArcilla.fecha=datefecha;

    const idtransporte = this.recepcionArcilla.idtransporte.toString();
    const idtra = idtransporte.split('-');
    this.recepcionArcilla.idtransporte=parseInt(idtra[0]);

    const idarcilla = this.recepcionArcilla.idarcilla.toString();
    const idar = idarcilla.split('-');
    this.recepcionArcilla.idarcilla=parseInt(idar[0]);



    this.recepcionarcillaservice.createRecepcionarcilla(this.recepcionArcilla)
    .subscribe(data=>{
      alert("Creación Exitosa");
      this.router.navigate(["listrecepcionarcilla"]);
    });


    
  }
}