import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/model/cliente';
import { CreateDescargue } from 'src/app/model/descargue';
import { GrupoTrabajoAllArea } from 'src/app/model/grupotrabajo';
import { Horno } from 'src/app/model/horno';
import { Ladrillo } from 'src/app/model/ladrillo';
import { Transporte } from 'src/app/model/transporte';
import { ClienteService } from 'src/app/service/cliente/cliente.service';
import { DescargueService } from 'src/app/service/edscargue/descargue.service';
import { GrupotrabajoService } from 'src/app/service/grupotrabajo/grupotrabajo.service';
import { HornoService } from 'src/app/service/horno/horno.service';
import { LadrilloService } from 'src/app/service/ladrillo/ladrillo.service';
import { TransporteService } from 'src/app/service/transporte/transporte.service';

@Component({
  selector: 'app-adddescargue',
  templateUrl: './adddescargue.component.html',
  styleUrls: ['./adddescargue.component.css']
})
export class AdddescargueComponent implements OnInit {

  constructor(private router:Router, private grupotrabajoservice:GrupotrabajoService, private hornoservice:HornoService , private clienteservice:ClienteService, private ladrilloservice:LadrilloService, private transporteservice:TransporteService, private descargueservice:DescargueService) { }

  descargue = new CreateDescargue(new Date(),0,"","",0,0,0,0,0,"",new Date(),true);

  grupotrabajo: GrupoTrabajoAllArea[] = [];
  horno: Horno[] = [];
  cliente: Cliente[] = [];
  ladrillo: Ladrillo[] = [];
  transporte: Transporte[] = [];

  ngOnInit(): void {
    this.getGrupoTrabajo();
    this.getHorno();
    this.getCliente();
    this.getTransporte();
    this.getLadrillo();
  }

  getGrupoTrabajo(){
    this.grupotrabajoservice.getAllTrabajoAllArea()
    .subscribe(data=>{
      this.grupotrabajo=data;
    }); 
  } 

  getHorno(){
    this.hornoservice.getAllHorno()
    .subscribe(data=>{
      this.horno=data;
    });
  } 

  getCliente(){
    this.clienteservice.getAllCliente()
    .subscribe(data=>{
      this.cliente=data;
    });
  } 

  getLadrillo(){
    this.ladrilloservice.getAllLadrillo()
    .subscribe(data=>{
      this.ladrillo=data;
    });
  } 

  getTransporte(){
    this.transporteservice.getAllTransporte()
    .subscribe(data=>{
      this.transporte=data;
    });
  } 

  createDescargue(){

    var d = this.descargue.tx_date.getDate();
    var m = this.descargue.tx_date.getMonth()+1;
    var yy = this.descargue.tx_date.getFullYear();
    var date = yy+"-"+m+"-"+d;
    this.descargue.tx_date=date;

    var dd = this.descargue.fecha.getDate();
    var mm = this.descargue.fecha.getMonth()+1;
    var yyyy = this.descargue.fecha.getFullYear();
    var datefecha = yyyy+"-"+mm+"-"+dd;
    this.descargue.fecha=datefecha;
    
    const idgrupotrabajo = this.descargue.idgrupotrabajo.toString();
    const idgrupo = idgrupotrabajo.split('-');
    this.descargue.idgrupotrabajo=parseInt(idgrupo[0]);

    const idhorno = this.descargue.idhorno.toString();
    const idhor = idhorno.split('-');
    this.descargue.idhorno=parseInt(idhor[0]);

    const idcliente = this.descargue.idcliente.toString();
    const idcli = idcliente.split('-');
    this.descargue.idcliente=parseInt(idcli[0]);

    const idtransporte = this.descargue.idtransporte.toString();
    const idtras = idtransporte.split('-');
    this.descargue.idtransporte=parseInt(idtras[0]);

    const idladrillo = this.descargue.idladrillo.toString();
    const idlad = idladrillo.split('-');
    this.descargue.idladrillo=parseInt(idlad[0]);

    console.log(this.descargue)
    console.log(this.descargue.fecha)
    
    this.descargueservice.createDescargue(this.descargue)
    .subscribe(data=>{
      alert("Creación Exitosa");
      this.router.navigate(["listdescargue"]);
    });
    
  }

}
