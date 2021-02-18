import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/service/cliente/cliente.service';

@Component({
  selector: 'app-listcliente',
  templateUrl: './listcliente.component.html',
  styleUrls: ['./listcliente.component.css']
})
export class ListclienteComponent implements OnInit {


  constructor(private http: ClienteService, private router: Router) { }
  clientes: Cliente[] = [];

  ngOnInit(): void {
    this.http.getAllCliente()
    .subscribe(data=>{
      this.clientes=data;
    });
  }

  goAddCliente(){
    this.router.navigate(["addcliente"])
  }

}
