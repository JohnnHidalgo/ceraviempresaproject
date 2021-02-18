import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateArcilla } from 'src/app/model/arcilla';
import { ArcillaService } from 'src/app/service/arcilla/arcilla.service';

@Component({
  selector: 'app-addarcilla',
  templateUrl: './addarcilla.component.html',
  styleUrls: ['./addarcilla.component.css']
})
export class AddarcillaComponent implements OnInit {

  constructor(private router:Router, private service:ArcillaService) { }

  arcilla = new CreateArcilla("","",new Date,true);

  
  createArcilla(){
    var dd = this.arcilla.tx_date.getDate();
    var mm = this.arcilla.tx_date.getMonth()+1;
    var yyyy = this.arcilla.tx_date.getFullYear();
    var date = yyyy+"-"+mm+"-"+dd;
    this.arcilla.tx_date=date;

    this.service.createArcilla(this.arcilla)
    .subscribe(data=>{
      alert("Creación Exitosa");
      this.router.navigate(["listarcilla"]);
    })
  }

  ngOnInit(): void {
  }

}
