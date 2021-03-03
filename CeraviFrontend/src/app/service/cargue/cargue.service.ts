import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cargue, CargueAllData } from 'src/app/model/cargue';

@Injectable({
  providedIn: 'root'
})
export class CargueService {

  constructor(private http:HttpClient) { }
  
  mainUrl='https://us-central1-ceraviproject.cloudfunctions.net/ceravibackendservice/cargue/';
  
  getAllCargue(){  
    return this.http.get<Cargue[]>(this.mainUrl);
  }
 
  getAllCargueAllData(){  
    return this.http.get<CargueAllData[]>(this.mainUrl+"alldata/");
  }

  getOneCargue(idcargue:number){  
    return this.http.get<any>(this.mainUrl+idcargue);
  }

  createCargue(cargue:any){
    return this.http.post<any>(this.mainUrl,cargue);
  }
  
  updateCargue(cargue:Cargue){
    return this.http.put<Cargue>(this.mainUrl+cargue.idcargue,cargue);
  }

  deleteCargue(cargue:Cargue){
    return this.http.put<Cargue>(this.mainUrl+"delete/"+cargue.idcargue,cargue);
  }
}
