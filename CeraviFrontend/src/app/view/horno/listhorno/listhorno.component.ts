import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Horno } from 'src/app/model/horno';
import { HornoService } from 'src/app/service/horno/horno.service';

@Component({
  selector: 'app-listhorno',
  templateUrl: './listhorno.component.html',
  styleUrls: ['./listhorno.component.css']
})
export class ListhornoComponent implements OnInit {


  constructor(private http: HornoService, private router: Router) { }
  hornos: Horno[] = [];

  ngOnInit(): void {
    this.http.getAllHorno()
    .subscribe(data=>{
      this.hornos=data;
    });
  }

  goAddHorno(){
    this.router.navigate(["addhorno"])
  }

}
