import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuemaControlAllData } from 'src/app/model/quemacontrol';
import { QuemacontrolService } from 'src/app/service/quemacontrol/quemacontrol.service';

@Component({
  selector: 'app-listquemacontrol',
  templateUrl: './listquemacontrol.component.html',
  styleUrls: ['./listquemacontrol.component.css']
})
export class ListquemacontrolComponent implements OnInit {

  constructor(private http: QuemacontrolService, private router: Router) { }
  
  quemacontrol: QuemaControlAllData[] = [];
  
  ngOnInit(): void {
    this.http.getAllControlQuemaAllData()
    .subscribe(data=>{
      console.log(this.quemacontrol)
      this.quemacontrol=data;
    });
  }

}
