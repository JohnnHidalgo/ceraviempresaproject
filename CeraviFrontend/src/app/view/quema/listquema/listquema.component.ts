import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuemaAllData } from 'src/app/model/quema';
import { QuemaService } from 'src/app/service/quema/quema.service';

@Component({
  selector: 'app-listquema',
  templateUrl: './listquema.component.html',
  styleUrls: ['./listquema.component.css']
})
export class ListquemaComponent implements OnInit {

  constructor(private http: QuemaService, private router: Router) { }
  
  quema: QuemaAllData[] = [];
  
  ngOnInit(): void {
    this.http.getAllQuemaAllData()
    .subscribe(data=>{
      this.quema=data;
    });
  }

}
