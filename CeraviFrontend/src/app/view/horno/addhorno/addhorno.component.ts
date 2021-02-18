import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateHorno } from 'src/app/model/horno';
import { HornoService } from 'src/app/service/horno/horno.service';

@Component({
  selector: 'app-addhorno',
  templateUrl: './addhorno.component.html',
  styleUrls: ['./addhorno.component.css']
})
export class AddhornoComponent implements OnInit {

  constructor(private router:Router, private service:HornoService) { }

  horno = new CreateHorno("","",new Date,true);

  
  createHorno(){
    var dd = this.horno.tx_date.getDate();
    var mm = this.horno.tx_date.getMonth()+1;
    var yyyy = this.horno.tx_date.getFullYear();
    var date = yyyy+"-"+mm+"-"+dd;
    this.horno.tx_date=date;

    this.service.createHorno(this.horno)
    .subscribe(data=>{
      alert("Creación Exitosa");
      this.router.navigate(["listhorno"]);
    })
  }

  ngOnInit(): void {
  }

}
