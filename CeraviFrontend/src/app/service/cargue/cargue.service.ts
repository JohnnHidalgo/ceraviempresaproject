import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cargue, CargueAllData } from 'src/app/model/cargue';

@Injectable({
  providedIn: 'root'
})
export class CargueService {

  constructor(private http:HttpClient) { }
  
  mainUrl='https://us-central1-ceraviproject.cloudfunctions.net/ceravibackendservice/cargue/';
  
  getAllMoldeado(){  
    return this.http.get<Cargue[]>(this.mainUrl);
  }
 
  getAllMoldeadoAllData(){  
    return this.http.get<CargueAllData[]>(this.mainUrl+"alldata/");
  }

  getOneMoldeado(idcargue:number){  
    return this.http.get<any>(this.mainUrl+idcargue);
  }

  createMoldeado(cargue:any){
    return this.http.post<any>(this.mainUrl,cargue);
  }
  
  updateMoldeado(cargue:Cargue){
    return this.http.put<Cargue>(this.mainUrl+cargue.idcargue,cargue);
  }

  deleteMoldeado(cargue:Cargue){
    return this.http.put<Cargue>(this.mainUrl+"delete/"+cargue.idcargue,cargue);
  }
}
