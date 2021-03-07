import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Descargue, DescargueAllData } from 'src/app/model/descargue';

@Injectable({
  providedIn: 'root'
})
export class DescargueService {
  constructor(private http:HttpClient) { }
  
  mainUrl='https://us-central1-ceraviproject.cloudfunctions.net/ceravibackendservice/descargue/';
  
  getAllDescargue(){  
    return this.http.get<Descargue[]>(this.mainUrl);
  }
 
  getAllDescargueAllData(){  
    return this.http.get<DescargueAllData[]>(this.mainUrl+"alldata");
  }

  getOneDescargue(iddescargue:number){  
    return this.http.get<any>(this.mainUrl+iddescargue);
  }

  createDescargue(descargue:any){
    return this.http.post<any>(this.mainUrl,descargue);
  }
  
  updateDescargue(descargue:Descargue){
    return this.http.put<Descargue>(this.mainUrl+descargue.iddescargue,descargue);
  }

  deleteDescargue(descargue:Descargue){
    return this.http.put<Descargue>(this.mainUrl+"delete/"+descargue.iddescargue,descargue);
  }
}