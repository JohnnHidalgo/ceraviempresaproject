import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ubicacion } from 'src/app/model/ubicacion';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {

  constructor(private http:HttpClient) { }
  
  mainUrl='https://us-central1-ceraviproject.cloudfunctions.net/ceravibackendservice/ubicacion/';
  
  getAllUbicacion(){  
    return this.http.get<Ubicacion[]>(this.mainUrl);
  }
  
  getOneUbicacion(idubicacion:number){  
    return this.http.get<any>(this.mainUrl+idubicacion);
  }

  createUbicacion(ubicacion:any){
    return this.http.post<any>(this.mainUrl,ubicacion);
  }
  
  updateUbicacion(ubicacion:Ubicacion){
    return this.http.put<Ubicacion>(this.mainUrl+ubicacion.idubicacion,ubicacion);
  }

  deleteUbicacion(ubicacion:Ubicacion){
    return this.http.put<Ubicacion>(this.mainUrl+"delete/"+ubicacion.idubicacion,ubicacion);
  }
}
