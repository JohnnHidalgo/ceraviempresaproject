import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrabajadorGrupoTrabajo } from 'src/app/model/trabajadorgrupotrabajo';

@Injectable({
  providedIn: 'root'
})
export class TrabajadorgrupotrabajoService {

  constructor(private http:HttpClient) { }
  
  mainUrl='https://us-central1-ceraviproject.cloudfunctions.net/ceravibackendservice/trabajadorgrupotrabajo/';
  
  getAllTrabajadorGrupoTrabajo(){  
    return this.http.get<TrabajadorGrupoTrabajo[]>(this.mainUrl);
  }

  createTrabajadorGrupoTrabajo(trabajadorgrupotrabajo:any){
    return this.http.post<any>(this.mainUrl,trabajadorgrupotrabajo);
  }
  
  updateTrabajadorGrupoTrabajo(trabajadorgrupotrabajo:TrabajadorGrupoTrabajo){
    return this.http.put<TrabajadorGrupoTrabajo>(this.mainUrl+trabajadorgrupotrabajo.idtrabajadorgrupotrabajo,trabajadorgrupotrabajo);
  }

  deleteTrabajadorGrupoTrabajo(trabajadorgrupotrabajo:TrabajadorGrupoTrabajo){
    return this.http.put<TrabajadorGrupoTrabajo>(this.mainUrl+"delete/"+trabajadorgrupotrabajo.idtrabajadorgrupotrabajo,trabajadorgrupotrabajo);
  }
}
