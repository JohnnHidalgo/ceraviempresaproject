import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from 'src/app/model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {


  constructor(private http:HttpClient) { }
  
  mainUrl='https://us-central1-ceraviproject.cloudfunctions.net/ceravibackendservice/cliente/';
  
  getAllCliente(){  
    return this.http.get<Cliente[]>(this.mainUrl);
  }
  
  getOneCliente(idcliente:number){  
    return this.http.get<any>(this.mainUrl+idcliente);
  }

  createCliente(cliente:any){
    return this.http.post<any>(this.mainUrl,cliente);
  }
  
  updateCliente(cliente:Cliente){
    return this.http.put<Cliente>(this.mainUrl+cliente.idcliente,cliente);
  }

  deleteCliente(cliente:Cliente){
    return this.http.put<Cliente>(this.mainUrl+"delete/"+cliente.idcliente,cliente);
  }
}
