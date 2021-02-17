import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transporte, TransporteAllData } from 'src/app/model/transporte';
import { TransporteService } from 'src/app/service/transporte/transporte.service';

@Component({
  selector: 'app-listtransporte',
  templateUrl: './listtransporte.component.html',
  styleUrls: ['./listtransporte.component.css']
})
export class ListtransporteComponent implements OnInit {

  constructor(private http: TransporteService, private router: Router) { }
  transportes: TransporteAllData[] = [];

  ngOnInit(): void {
    this.http.getAllTransporteAllData()
    .subscribe(data=>{
      this.transportes=data;
    });
  }

  goAddTransporte(){
    this.router.navigate(["addtransporte"])
  }


}
