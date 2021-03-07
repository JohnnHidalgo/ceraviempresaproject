import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recepcionarcilla, RecepcionarcillaAllData } from 'src/app/model/recepcionarcilla';
import { RecepcionarcillaService } from 'src/app/service/recepcionarcilla/recepcionarcilla.service';

@Component({
  selector: 'app-listrecepcionarcilla',
  templateUrl: './listrecepcionarcilla.component.html',
  styleUrls: ['./listrecepcionarcilla.component.css']
})
export class ListrecepcionarcillaComponent implements OnInit {

  constructor(private http: RecepcionarcillaService, private router: Router) { }
  
  recepcionarcillalist: RecepcionarcillaAllData[] = [];
  
  ngOnInit(): void {
    this.http.getAllRecepcionarcillaAllData()
    .subscribe(data=>{
      this.recepcionarcillalist=data;
    });
  }

  goAddRecepcionArcilla(){
    this.router.navigate(["addrecepcionarcilla"])
  }


}
