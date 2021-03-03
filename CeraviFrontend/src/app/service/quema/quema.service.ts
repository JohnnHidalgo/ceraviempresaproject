import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quema, QuemaAllData } from 'src/app/model/quema';

@Injectable({
  providedIn: 'root'
})
export class QuemaService {

  constructor(private http:HttpClient) { }
  
  mainUrl='https://us-central1-ceraviproject.cloudfunctions.net/ceravibackendservice/quema/';
  
  getAllQuema(){  
    return this.http.get<Quema[]>(this.mainUrl);
  }
 
  getAllQuemaAllData(){  
    return this.http.get<QuemaAllData[]>(this.mainUrl+"alldata/");
  }

  getOneQuema(idquema:number){  
    return this.http.get<any>(this.mainUrl+idquema);
  }

  createQuema(quema:any){
    return this.http.post<any>(this.mainUrl,quema);
  }
  
  updateQuema(quema:Quema){
    return this.http.put<Quema>(this.mainUrl+quema.idquema,quema);
  }

  deleteQuema(quema:Quema){
    return this.http.put<Quema>(this.mainUrl+"delete/"+quema.idquema,quema);
  }

}