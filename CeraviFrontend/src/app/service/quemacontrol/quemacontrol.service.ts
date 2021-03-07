import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QuemaControl, QuemaControlAllData } from 'src/app/model/quemacontrol';

@Injectable({
  providedIn: 'root'
})
export class QuemacontrolService {
  constructor(private http:HttpClient) { }
  
  mainUrl='https://us-central1-ceraviproject.cloudfunctions.net/ceravibackendservice/controlquema/';
  
  getAllControlQuema(){  
    return this.http.get<QuemaControl[]>(this.mainUrl);
  }
 
  getAllControlQuemaAllData(){  
    return this.http.get<QuemaControlAllData[]>(this.mainUrl+"alldata/data");
  }

  getOneControlQuema(idcontrolquema:number){  
    return this.http.get<any>(this.mainUrl+idcontrolquema);
  }

  createControlQuema(controlquema:any){
    return this.http.post<any>(this.mainUrl,controlquema);
  }
  
  updateControlQuema(controlquema:QuemaControl){
    return this.http.put<QuemaControl>(this.mainUrl+controlquema.idcontrolquema,controlquema);
  }

  deleteControlQuema(controlquema:QuemaControl){
    return this.http.put<QuemaControl>(this.mainUrl+"delete/"+controlquema.idcontrolquema,controlquema);
  }
}