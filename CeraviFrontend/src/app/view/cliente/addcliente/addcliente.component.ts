import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateCliente } from 'src/app/model/cliente';
import { CreateLadrillo } from 'src/app/model/ladrillo';
import { ClienteService } from 'src/app/service/cliente/cliente.service';

@Component({
  selector: 'app-addcliente',
  templateUrl: './addcliente.component.html',
  styleUrls: ['./addcliente.component.css']
})
export class AddclienteComponent implements OnInit {
  constructor(private router:Router, private service:ClienteService) { }

  cliente = new CreateCliente("","","","","","",new Date,true);

  
  createCliente(){
    var dd = this.cliente.tx_date.getDate();
    var mm = this.cliente.tx_date.getMonth()+1;
    var yyyy = this.cliente.tx_date.getFullYear();
    var date = yyyy+"-"+mm+"-"+dd;
    this.cliente.tx_date=date;

    this.service.createCliente(this.cliente)
    .subscribe(data=>{
      alert("Creación Exitosa");
      this.router.navigate(["listcliente"]);
    })
  }
  ngOnInit(): void {
  }

}
