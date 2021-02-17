import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cooperativa } from 'src/app/model/cooperativa';
import { CooperativaService } from 'src/app/service/cooperativa/cooperativa.service';

@Component({
  selector: 'app-listcooperativa',
  templateUrl: './listcooperativa.component.html',
  styleUrls: ['./listcooperativa.component.css']
})
export class ListcooperativaComponent implements OnInit {

  constructor(private http: CooperativaService, private router: Router) { }
  cooperativas: Cooperativa[] = [];

  ngOnInit(): void {
    this.http.getAllCooperativa()
    .subscribe(data=>{
      this.cooperativas=data;
    });
  }

  goAddCooperativa(){
    this.router.navigate(["addcooperativa"])
  }


}
