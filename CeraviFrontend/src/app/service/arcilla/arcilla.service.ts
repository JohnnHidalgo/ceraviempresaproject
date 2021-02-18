import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Arcilla } from 'src/app/model/arcilla';

@Injectable({
  providedIn: 'root'
})
export class ArcillaService {


  constructor(private http:HttpClient) { }
  
  mainUrl='https://us-central1-ceraviproject.cloudfunctions.net/ceravibackendservice/arcilla/';
  
  getAllArcilla(){  
    return this.http.get<Arcilla[]>(this.mainUrl);
  }
  
  getOneArcilla(idarcilla:number){  
    return this.http.get<any>(this.mainUrl+idarcilla);
  }

  createArcilla(arcilla:any){
    return this.http.post<any>(this.mainUrl,arcilla);
  }
  
  updateArcilla(arcilla:Arcilla){
    return this.http.put<Arcilla>(this.mainUrl+arcilla.idarcilla,arcilla);
  }

  deleteArcilla(arcilla:Arcilla){
    return this.http.put<Arcilla>(this.mainUrl+"delete/"+arcilla.idarcilla,arcilla);
  }
}
