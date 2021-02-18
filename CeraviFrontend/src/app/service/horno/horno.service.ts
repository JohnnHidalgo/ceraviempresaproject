import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Horno } from 'src/app/model/horno';

@Injectable({
  providedIn: 'root'
})
export class HornoService {

  constructor(private http:HttpClient) { }
  
  mainUrl='https://us-central1-ceraviproject.cloudfunctions.net/ceravibackendservice/horno/';
  
  getAllHorno(){  
    return this.http.get<Horno[]>(this.mainUrl);
  }
  
  getOneHorno(idhorno:number){  
    return this.http.get<any>(this.mainUrl+idhorno);
  }

  createHorno(horno:any){
    return this.http.post<any>(this.mainUrl,horno);
  }
  
  updateHorno(horno:Horno){
    return this.http.put<Horno>(this.mainUrl+horno.idhorno,horno);
  }

  deleteHorno(horno:Horno){
    return this.http.put<Horno>(this.mainUrl+"delete/"+horno.idhorno,horno);
  }
}
