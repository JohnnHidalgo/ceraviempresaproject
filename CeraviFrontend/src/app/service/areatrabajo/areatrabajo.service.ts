import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AreaTrabajo } from 'src/app/model/areatrabajo';

@Injectable({
  providedIn: 'root'
})
export class AreatrabajoService {

  constructor(private http:HttpClient) { }
  
  mainUrl='https://us-central1-ceraviproject.cloudfunctions.net/ceravibackendservice/areatrabajo/';
  
  getAllAreaTrabajo(){  
    return this.http.get<AreaTrabajo[]>(this.mainUrl);
  }
  
  getOneAreaTrabajo(idareatrabajo:number){  
    return this.http.get<any>(this.mainUrl+idareatrabajo);
  }

  createAreaTrabajo(areatrabajo:any){
    return this.http.post<any>(this.mainUrl,areatrabajo);
  }
  
  updateAreaTrabajo(areatrabajo:AreaTrabajo){
    return this.http.put<AreaTrabajo>(this.mainUrl+areatrabajo.idareatrabajo,areatrabajo);
  }

  deleteAreaTrabajo(areatrabajo:AreaTrabajo){
    return this.http.put<AreaTrabajo>(this.mainUrl+"delete/"+areatrabajo.idareatrabajo,areatrabajo);
  }
}