import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pago, PagoAllData } from 'src/app/model/pagos';

@Injectable({
  providedIn: 'root'
})
export class PagosService {

  constructor(private http:HttpClient) { }
  
  mainUrl='https://us-central1-ceraviproject.cloudfunctions.net/ceravibackendservice/pago/';
  
  getAllPago(){  
    return this.http.get<Pago[]>(this.mainUrl);
  }

  getAllPagoAllData(){  
    return this.http.get<PagoAllData[]>(this.mainUrl+"alldata/");
  }
  
  getOnePago(idpago:number){  
    return this.http.get<any>(this.mainUrl+idpago);
  }

  createPago(pago:any){
    return this.http.post<any>(this.mainUrl,pago);
  }
  
  updatePago(pago:Pago){
    return this.http.put<Pago>(this.mainUrl+pago.idpagos,pago);
  }

  deletePago(pago:Pago){
    return this.http.put<Pago>(this.mainUrl+"delete/"+pago.idpagos,pago);
  }
}
