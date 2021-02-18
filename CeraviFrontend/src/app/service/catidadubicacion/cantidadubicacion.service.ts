import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CantidadUbicacion } from 'src/app/model/cantidadubicacion';

@Injectable({
  providedIn: 'root'
})
export class CantidadubicacionService {

  constructor(private http:HttpClient) { }
  
  mainUrl='https://us-central1-ceraviproject.cloudfunctions.net/ceravibackendservice/catidadubicacion/';
  
  getAllCantidadUbicacion(){  
    return this.http.get<CantidadUbicacion[]>(this.mainUrl);
  }
  
  getOneCantidadUbicacion(idcantidadubicacion:number){  
    return this.http.get<any>(this.mainUrl+idcantidadubicacion);
  }

  createCantidadUbicacion(cantidadubicacion:any){
    return this.http.post<any>(this.mainUrl,cantidadubicacion);
  }
  
  updateCantidadUbicacion(cantidadubicacion:CantidadUbicacion){
    return this.http.put<CantidadUbicacion>(this.mainUrl+cantidadubicacion.idcantidadubicacion,cantidadubicacion);
  }

  deleteCantidadUbicacion(cantidadubicacion:CantidadUbicacion){
    return this.http.put<CantidadUbicacion>(this.mainUrl+"delete/"+cantidadubicacion.idcantidadubicacion,cantidadubicacion);
  }
  
}
