import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TipoTransporte } from 'src/app/model/tipotransporte';

@Injectable({
  providedIn: 'root'
})
export class TipotransporteService {
  constructor(private http:HttpClient) { }
  
  mainUrl='https://us-central1-ceraviproject.cloudfunctions.net/ceravibackendservice/tipotransporte/';
  
  getAllTipoTransporte(){  
    return this.http.get<TipoTransporte[]>(this.mainUrl);
  }
  
  getOneTipoTransporte(idtipotransporte:number){  
    return this.http.get<any>(this.mainUrl+idtipotransporte);
  }

  createTipoTransporte(tipoTransporte:any){
    return this.http.post<any>(this.mainUrl,tipoTransporte);
  }
  
  updateTipoTransporte(tipoTransporte:TipoTransporte){
    return this.http.put<TipoTransporte>(this.mainUrl+tipoTransporte.idtipotransporte,tipoTransporte);
  }

  deleteTipoTransporte(tipoTransporte:TipoTransporte){
    return this.http.put<TipoTransporte>(this.mainUrl+"delete/"+tipoTransporte.idtipotransporte,tipoTransporte);
  }
}
