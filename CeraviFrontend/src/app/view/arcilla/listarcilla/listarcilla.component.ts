import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Arcilla } from 'src/app/model/arcilla';
import { ArcillaService } from 'src/app/service/arcilla/arcilla.service';

@Component({
  selector: 'app-listarcilla',
  templateUrl: './listarcilla.component.html',
  styleUrls: ['./listarcilla.component.css']
})
export class ListarcillaComponent implements OnInit {

  constructor(private http: ArcillaService, private router: Router) { }
  arcillas: Arcilla[] = [];

  ngOnInit(): void {
    this.http.getAllArcilla()
    .subscribe(data=>{
      this.arcillas=data;
    });
  }

  goAddArcilla(){
    this.router.navigate(["addarcilla"])
  }

}