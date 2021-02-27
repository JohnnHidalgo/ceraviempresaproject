import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recepcionarcilla, RecepcionarcillaAllData } from 'src/app/model/recepcionarcilla';

@Injectable({
  providedIn: 'root'
})
export class RecepcionarcillaService {

  constructor(private http:HttpClient) { }
  
  mainUrl='https://us-central1-ceraviproject.cloudfunctions.net/ceravibackendservice/recepcionarcilla/';
  
  getAllRecepcionarcilla(){  
    return this.http.get<Recepcionarcilla[]>(this.mainUrl);
  }
  
  getAllRecepcionarcillaAllData(){  
    return this.http.get<RecepcionarcillaAllData[]>(this.mainUrl+"alldata/");
  }

  getOneRecepcionarcilla(idrecepcionarcilla:number){  
    return this.http.get<any>(this.mainUrl+idrecepcionarcilla);
  }

  createRecepcionarcilla(recepcionarcilla:any){
    return this.http.post<any>(this.mainUrl,recepcionarcilla);
  }
  
  updateRecepcionarcilla(recepcionarcilla:Recepcionarcilla){
    return this.http.put<Recepcionarcilla>(this.mainUrl+recepcionarcilla.idrecepcionarcilla,recepcionarcilla);
  }

  deleteRecepcionarcilla(recepcionarcilla:Recepcionarcilla){
    return this.http.put<Recepcionarcilla>(this.mainUrl+"delete/"+recepcionarcilla.idrecepcionarcilla,recepcionarcilla);
  }
}
