import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoDePago } from 'src/app/model/tipodepago';
import { TipodepagoService } from 'src/app/service/tipodepago/tipodepago.service';

@Component({
  selector: 'app-listtipodepago',
  templateUrl: './listtipodepago.component.html',
  styleUrls: ['./listtipodepago.component.css']
})
export class ListtipodepagoComponent implements OnInit {

  constructor(private http: TipodepagoService, private router: Router) { }
  tipodepago: TipoDePago[] = [];

  ngOnInit(): void {
    this.http.getAllTipoDePago()
    .subscribe(data=>{
      this.tipodepago=data;
    });
  }

  goAddTipodePago(){
    this.router.navigate(["addtipodepago"])
  }

}
