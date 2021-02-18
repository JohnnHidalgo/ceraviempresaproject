import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateLadrillo } from 'src/app/model/ladrillo';
import { LadrilloService } from 'src/app/service/ladrillo/ladrillo.service';

@Component({
  selector: 'app-addladrillo',
  templateUrl: './addladrillo.component.html',
  styleUrls: ['./addladrillo.component.css']
})
export class AddladrilloComponent implements OnInit {

  constructor(private router:Router, private service:LadrilloService) { }

  ladrillo = new CreateLadrillo("","",new Date,true);

  
  createLadrillo(){
    var dd = this.ladrillo.tx_date.getDate();
    var mm = this.ladrillo.tx_date.getMonth()+1;
    var yyyy = this.ladrillo.tx_date.getFullYear();
    var date = yyyy+"-"+mm+"-"+dd;
    this.ladrillo.tx_date=date;

    this.service.createLadrillo(this.ladrillo)
    .subscribe(data=>{
      alert("Creación Exitosa");
      this.router.navigate(["listladrillo"]);
    })
  }
  ngOnInit(): void {
  }

}
