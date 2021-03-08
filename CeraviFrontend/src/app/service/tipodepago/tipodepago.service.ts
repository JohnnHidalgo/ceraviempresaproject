import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoDePago } from 'src/app/model/tipodepago';

@Injectable({
  providedIn: 'root'
})
export class TipodepagoService {

  constructor(private http:HttpClient) { }
  
  mainUrl='https://us-central1-ceraviproject.cloudfunctions.net/ceravibackendservice/tipopago/';
  
  getAllTipoDePago(){  
    return this.http.get<TipoDePago[]>(this.mainUrl);
  }
  
  getOneTipoDePago(idtipodepago:number){  
    return this.http.get<any>(this.mainUrl+idtipodepago);
  }

  createTipoDePago(tipoDePago:any){
    return this.http.post<any>(this.mainUrl,tipoDePago);
  }
  
  updateTipoDePago(tipoDePago:TipoDePago){
    return this.http.put<TipoDePago>(this.mainUrl+tipoDePago.idtipodepago,tipoDePago);
  }

  deleteTipoDePago(tipoDePago:TipoDePago){
    return this.http.put<TipoDePago>(this.mainUrl+"delete/"+tipoDePago.idtipodepago,tipoDePago);
  }
}
