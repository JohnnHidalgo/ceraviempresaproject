import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoTransporte } from 'src/app/model/tipotransporte';
import { TipotransporteService } from 'src/app/service/tipotransporte/tipotransporte.service';

@Component({
  selector: 'app-listtipotransporte',
  templateUrl: './listtipotransporte.component.html',
  styleUrls: ['./listtipotransporte.component.css']
})
export class ListtipotransporteComponent implements OnInit {

  constructor(private http: TipotransporteService, private router: Router) { }
  tipotransportes: TipoTransporte[] = [];

  ngOnInit(): void {
    this.http.getAllTipoTransporte()
    .subscribe(data=>{
      this.tipotransportes=data;
    });
  }

  goAddTipotransporte(){
    this.router.navigate(["addtipotransporte"])
  }

}
