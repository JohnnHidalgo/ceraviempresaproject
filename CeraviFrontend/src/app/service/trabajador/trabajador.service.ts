import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trabajador } from 'src/app/model/trabajador';

@Injectable({
  providedIn: 'root'
})
export class TrabajadorService {

  constructor(private http:HttpClient) { }
  
  mainUrl='https://us-central1-ceraviproject.cloudfunctions.net/ceravibackendservice/trabajador/';
  
  getAllTrabajador(){  
    return this.http.get<Trabajador[]>(this.mainUrl);
  }
  
  getOneTrabajador(idtrabajador:number){  
    return this.http.get<any>(this.mainUrl+idtrabajador);
  }

  createTrabajador(trabajador:any){
    return this.http.post<any>(this.mainUrl,trabajador);
  }
  
  updateTrabajador(trabajador:Trabajador){
    return this.http.put<Trabajador>(this.mainUrl+trabajador.idtrabajador,trabajador);
  }

  deleteTrabajador(trabajador:Trabajador){
    return this.http.put<Trabajador>(this.mainUrl+"delete/"+trabajador.idtrabajador,trabajador);
  }
}