import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GrupoTrabajo } from 'src/app/model/grupotrabajo';

@Injectable({
  providedIn: 'root'
})
export class GrupotrabajoService {

  constructor(private http:HttpClient) { }
  
  mainUrl='https://us-central1-ceraviproject.cloudfunctions.net/ceravibackendservice/grupotrabajo/';
  
  getAllGrupoTrabajo(){  
    return this.http.get<GrupoTrabajo[]>(this.mainUrl);
  }
  
  getOneGrupoTrabajo(idgrupotrabajo:number){  
    return this.http.get<any>(this.mainUrl+idgrupotrabajo);
  }

  createGrupoTrabajo(grupotrabajo:any){
    return this.http.post<any>(this.mainUrl,grupotrabajo);
  }
  
  updateGrupoTrabajo(grupotrabajo:GrupoTrabajo){
    return this.http.put<GrupoTrabajo>(this.mainUrl+grupotrabajo.idgrupotrabajo,grupotrabajo);
  }

  deleteGrupoTrabajo(grupotrabajo:GrupoTrabajo){
    return this.http.put<GrupoTrabajo>(this.mainUrl+"delete/"+grupotrabajo.idgrupotrabajo,grupotrabajo);
  }
}