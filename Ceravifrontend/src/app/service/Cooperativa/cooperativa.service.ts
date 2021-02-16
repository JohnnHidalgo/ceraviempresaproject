import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cooperativa } from 'src/app/model/cooperativa';

@Injectable({
  providedIn: 'root'
})
export class CooperativaService {

  constructor(private http:HttpClient) { }
  
  mainUrl='https://us-central1-ceraviproject.cloudfunctions.net/ceravibackendservice/cooperativa/';
  
  getAllCooperativa(){  
    return this.http.get<Cooperativa[]>(this.mainUrl);
  }
  
  getOneCooperativa(idcooperativa:number){  
    return this.http.get<any>(this.mainUrl+idcooperativa);
  }

  createDocument(cooperativa:any){
    return this.http.post<any>(this.mainUrl,cooperativa);
  }
  
  updateCooperativa(cooperativa:Cooperativa){
    return this.http.put<Cooperativa>(this.mainUrl+cooperativa.idcooperativa,cooperativa);
  }

  deleteCooperativa(cooperativa:Cooperativa){
    return this.http.put<Cooperativa>(this.mainUrl+"delete/"+cooperativa.idcooperativa,cooperativa);
  }

}
