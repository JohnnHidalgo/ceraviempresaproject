import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ladrillo } from 'src/app/model/ladrillo';

@Injectable({
  providedIn: 'root'
})
export class LadrilloService {


  constructor(private http:HttpClient) { }
  
  mainUrl='https://us-central1-ceraviproject.cloudfunctions.net/ceravibackendservice/ladrillo/';
  
  getAllLadrillo(){  
    return this.http.get<Ladrillo[]>(this.mainUrl);
  }
  
  getOneLadrillo(idladrillo:number){  
    return this.http.get<any>(this.mainUrl+idladrillo);
  }

  createLadrillo(ladrillo:any){
    return this.http.post<any>(this.mainUrl,ladrillo);
  }
  
  updateLadrillo(ladrillo:Ladrillo){
    return this.http.put<Ladrillo>(this.mainUrl+ladrillo.idladrillo,ladrillo);
  }

  deleteLadrillo(ladrillo:Ladrillo){
    return this.http.put<Ladrillo>(this.mainUrl+"delete/"+ladrillo.idladrillo,ladrillo);
  }
}
