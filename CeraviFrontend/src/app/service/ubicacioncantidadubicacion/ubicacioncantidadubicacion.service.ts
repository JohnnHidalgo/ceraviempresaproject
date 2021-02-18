import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UbicacionCantidadUbicacion } from 'src/app/model/ubicacioncantidadubicacion';

@Injectable({
  providedIn: 'root'
})
export class UbicacioncantidadubicacionService {

  constructor(private http:HttpClient) { }
  
  mainUrl='https://us-central1-ceraviproject.cloudfunctions.net/ceravibackendservice/ubicacioncantidadubicacion/';
  
  getAllUbicacionCantidadUbicacion(){  
    return this.http.get<UbicacionCantidadUbicacion[]>(this.mainUrl);
  }
  
  getOneUbicacionCantidadUbicacion(idubicacioncantidadubicacion:number){  
    return this.http.get<any>(this.mainUrl+idubicacioncantidadubicacion);
  }

  createUbicacionCantidadUbicacion(ubicacionCantidadUbicacion:any){
    return this.http.post<any>(this.mainUrl,ubicacionCantidadUbicacion);
  }
  
  updateUbicacionCantidadUbicacion(ubicacionCantidadUbicacion:UbicacionCantidadUbicacion){
    return this.http.put<UbicacionCantidadUbicacion>(this.mainUrl+ubicacionCantidadUbicacion.idubicacioncantidadubicacion,ubicacionCantidadUbicacion);
  }

  deleteUbicacionCantidadUbicacion(ubicacionCantidadUbicacion:UbicacionCantidadUbicacion){
    return this.http.put<UbicacionCantidadUbicacion>(this.mainUrl+"delete/"+ubicacionCantidadUbicacion.idubicacioncantidadubicacion,ubicacionCantidadUbicacion);
  }
}
