import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Moldeado } from 'src/app/model/moldeado';

@Injectable({
  providedIn: 'root'
})
export class MoldeadoService {

  constructor(private http:HttpClient) { }
  
  mainUrl='https://us-central1-ceraviproject.cloudfunctions.net/ceravibackendservice/moldeado/';
  
  getAllMoldeado(){  
    return this.http.get<Moldeado[]>(this.mainUrl);
  }
 
  /*
  getAllMoldeadoAllData(){  
    return this.http.get<RecepcionarcillaAllData[]>(this.mainUrl+"alldata/");
  }
  */

  getOneMoldeado(idmoldeado:number){  
    return this.http.get<any>(this.mainUrl+idmoldeado);
  }

  createMoldeado(moldeado:any){
    return this.http.post<any>(this.mainUrl,moldeado);
  }
  
  updateMoldeado(moldeado:Moldeado){
    return this.http.put<Moldeado>(this.mainUrl+moldeado.idmoldeado,moldeado);
  }

  deleteMoldeado(moldeado:Moldeado){
    return this.http.put<Moldeado>(this.mainUrl+"delete/"+moldeado.idmoldeado,moldeado);
  }
}
