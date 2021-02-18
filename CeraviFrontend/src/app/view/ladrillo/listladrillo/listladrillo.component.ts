import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ladrillo } from 'src/app/model/ladrillo';
import { LadrilloService } from 'src/app/service/ladrillo/ladrillo.service';

@Component({
  selector: 'app-listladrillo',
  templateUrl: './listladrillo.component.html',
  styleUrls: ['./listladrillo.component.css']
})
export class ListladrilloComponent implements OnInit {

  constructor(private http: LadrilloService, private router: Router) { }
  ladrillos: Ladrillo[] = [];

  ngOnInit(): void {
    this.http.getAllLadrillo()
    .subscribe(data=>{
      this.ladrillos=data;
    });
  }

  goAddLadrillo(){
    this.router.navigate(["addladrillo"])
  }


}
