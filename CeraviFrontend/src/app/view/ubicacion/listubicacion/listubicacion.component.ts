import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateUbicacion, Ubicacion } from 'src/app/model/ubicacion';
import { UbicacionService } from 'src/app/service/ubicacion/ubicacion.service';

@Component({
  selector: 'app-listubicacion',
  templateUrl: './listubicacion.component.html',
  styleUrls: ['./listubicacion.component.css']
})
export class ListubicacionComponent implements OnInit {


  constructor(private http: UbicacionService, private router: Router) { }
  ubicacions: Ubicacion[] = [];

  ngOnInit(): void {
    this.http.getAllUbicacion()
    .subscribe(data=>{
      this.ubicacions=data;
    });
  }

  goAddUbicacion(){
    this.router.navigate(["addubicacion"])
  }

}
