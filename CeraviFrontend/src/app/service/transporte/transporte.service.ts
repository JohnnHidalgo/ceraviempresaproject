import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transporte, TransporteAllData } from 'src/app/model/transporte';

@Injectable({
  providedIn: 'root'
})
export class TransporteService {

  constructor(private http:HttpClient) { }
  
  mainUrl='https://us-central1-ceraviproject.cloudfunctions.net/ceravibackendservice/transporte/';
  
  getAllTransporte(){  
    return this.http.get<Transporte[]>(this.mainUrl);
  }

  getAllTransporteAllData(){  
    return this.http.get<TransporteAllData[]>(this.mainUrl+"all");
  }
  
  getOneTransporte(idtransporte:number){  
    return this.http.get<any>(this.mainUrl+idtransporte);
  }

  createTransporte(transporte:any){
    return this.http.post<any>(this.mainUrl,transporte);
  }
  
  updateTransporte(transporte:Transporte){
    return this.http.put<Transporte>(this.mainUrl+transporte.idtransporte,transporte);
  }

  deleteTransporte(transporte:Transporte){
    return this.http.put<Transporte>(this.mainUrl+"delete/"+transporte.idtransporte,transporte);
  }
}
