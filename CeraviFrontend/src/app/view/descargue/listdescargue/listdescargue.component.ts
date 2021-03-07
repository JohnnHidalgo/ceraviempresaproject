import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DescargueAllData } from 'src/app/model/descargue';
import { DescargueService } from 'src/app/service/edscargue/descargue.service';

@Component({
  selector: 'app-listdescargue',
  templateUrl: './listdescargue.component.html',
  styleUrls: ['./listdescargue.component.css']
})
export class ListdescargueComponent implements OnInit {

  constructor(private http: DescargueService, private router: Router) { }
  
  descargue: DescargueAllData[] = [];
  
  ngOnInit(): void {
    this.http.getAllDescargueAllData()
    .subscribe(data=>{
      this.descargue=data;
    });
  }

  goAdDescargue(){
    this.router.navigate(["adddescargue"])
  }
}
